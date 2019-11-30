// 菜谱的store
import * as dishServices from '../services/api';
export default {
    namespace: 'dishes',
    state: {
        list: [],
        total: null
    },
    reducers: {
        save(state, { payload: {data: {list, total}}}: any) {
            return { ...state, list, total};
        },
    },
    effects: {
        *list({ payload: { page = 1 } }, {call, put}) {
            const { data } = yield call(dishServices.fetch, {page});
            yield put({
                type: 'save',
                payload: data
            });
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
