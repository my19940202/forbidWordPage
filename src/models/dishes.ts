// 菜谱的store
import * as dishServices from '../services/api';
import {message} from 'antd';
export default {
    namespace: 'dishes',
    state: {
        list: [],
        total: null,
        modal: false,
        selectedItem: {},
        ingredients: [],
        ingredientsModal: false
    },
    reducers: {
        // TODO 这块不少方法可以合并
        save(state, { payload: {list} }: any) {
            return { ...state, list};
        },
        updateModal(state, {payload: {modal}}: any) {
            return { ...state, modal};
        },
        updateSelected(state, {payload: {selectedItem}}: any) {
            return { ...state, selectedItem};
        },
        updateIngredients(state, { payload }: any) {
            let ret = state;
            const {ingredientsModal, ingredients} = payload;
            if ('ingredientsModal' in payload) {
                ret = {...state, ingredientsModal};
            }
            if ('ingredients' in payload) {
                ret = {...state, ingredients};
            }
            return ret;
        }
    },
    effects: {
        *list({ payload: { page = 1 } }, {call, put}) {
            const { data } = yield call(dishServices.fetch, {page});
            yield put({
                type: 'save',
                payload: {
                    list: data.data
                }
            });
        },
        *ingredients(payload, {call, put}) {
            const { data } = yield call(dishServices.fetchIngredients, {});
            yield put({
                type: 'updateIngredients',
                payload: {
                    ingredients: data.data
                }
            });
        },
        *addIngredient({ payload }, {call, put}) {
            const { errno } = yield call(dishServices.addIngredients, payload);
            if (errno) {
                message.warn('add fail');
            }
            else {
                yield put({type: 'ingredients', payload: {}});
                yield put({type: 'updateIngredients', payload: {ingredientsModal: false}});
            }
        },
        *add({ payload }, {call, put}) {
            let {desc, name, ingredient} = payload;
            const { data, errno } = yield call(dishServices.create, {
                desc, name, ingredients: ingredient.join(',')
            });
            if (errno) {
                message.warn('add fail');
            }
            else {
                yield put({type: 'list', payload: {}});
                yield put({type: 'updateModal', payload: {modal: false}});
            }
        },
        *edit({ payload }, {call, put}) {
            let {id, desc, name, ingredient} = payload;
            const { data, errno } = yield call(dishServices.edit, {
                id, desc, name, ingredients: ingredient.join(',')
            });
            if (errno) {
                message.warn('add fail');
            }
            else {
                yield put({type: 'list', payload: {}});
                yield put({type: 'updateModal', payload: {modal: false}});
            }
        },
        *deleteDishes({ payload:{id} }, { call, put }) {
            const { data, errno } = yield call(dishServices.remove, id);
            if (errno) {
                message.warn('delte fail');
            }
            else {
                yield put({type: 'list', payload: {}});
            }
        },
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/') {
                    dispatch({ type: 'list', payload: query });
                    dispatch({ type: 'ingredients', payload: {} });
                }
            });
        },
    }
};
