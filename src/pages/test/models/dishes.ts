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
        save(state, { payload: {data: {list, total}} }: any) {
            return { ...state, list, total};
        },
        updateModal(state, {payload: {modal}}: any) {
            return { ...state, modal};
        },
        updateSelected(state, {payload: {selectedItem}}: any) {
            return { ...state, selectedItem};
        },
        updateIngredients(state, { payload: {ingredientsModal} }: any) {
            return { ...state, ingredientsModal};
        }
    },
    effects: {
        *list({ payload: { page = 1 } }, {call, put}) {
            const { data } = yield call(dishServices.fetch, {page});
            yield put({
                type: 'save',
                payload: data
            });
        },
        *ingredients(payload, {call, put}) {
            const { data } = yield call(dishServices.fetchIngredients, {});
            yield put({
                type: 'updateIngredients',
                payload: data
            });
        },
        *addIngredient({ payload }, {call, put}) {
            console.log(payload, 'payload');
            const { errno } = yield call(dishServices.addIngredients, payload);
            if (errno) {
                message.warn('add fail');
            }
            else {
                yield put({type: 'updateIngredients', payload: {ingredientsModal: false}});
            }
        },
        *add({ payload }, {call, put}) {
            const { data, errno } = yield call(dishServices.create, payload);
            if (errno) {
                message.warn('add fail');
            }
            else {
                yield put({type: 'list', payload: {}});
                yield put({type: 'updateModal', payload: {modal: false}});
            }

        },
        *delete({ payload }, { call, put }) {
            const { data, errno } = yield call(dishServices.remove, payload);
            if (errno) {
                message.warn('delte fail');
            }
            else {
                yield put({type: 'list', payload: {}});
            }
        },
        *edit({ payload: { id, body } }, { call, put }) {
            const { data, errno } = yield call(dishServices.edit, id, body);
            if (errno) {
                message.warn('delte fail');
            }
            else {
                yield put({type: 'list', payload: {}});
                yield put({type: 'updateModal', payload: {modal: false}});
            }
        },

    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/test/') {
                    dispatch({ type: 'list', payload: query });
                    dispatch({ type: 'ingredients', payload: {} });
                }
            });
        },
    }
};
