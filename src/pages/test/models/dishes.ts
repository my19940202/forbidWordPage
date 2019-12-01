// 菜谱的store
import * as dishServices from '../services/api';
import {message} from 'antd';
export default {
    namespace: 'dishes',
    state: {
        list: [],
        total: null,
        modal: false
    },
    reducers: {
        save(state, { payload: {data: {list, total}}}: any) {
            return { ...state, list, total};
        },
        updateModal(state, {payload: {modal}}: any) {
            return { ...state, modal};
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
        *edit({ payload: { id, query } }, { call, put }) {
            const { data, errno } = yield call(dishServices.edit, id, query);
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
                if (pathname === '/test/') {
                    dispatch({ type: 'list', payload: query });
                }
            });
        },
    }
};
