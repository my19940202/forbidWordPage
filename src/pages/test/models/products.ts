
export default {
    namespace: 'products',
    state: [],
    reducers: {
        add(state: any, { payload: item }: any) {
        let tmp = state.concat();
        if (!!item) {
            tmp.push(item);
        }
        return tmp;
        }
    }
};
