export default {
  namespace: 'products',
  state: [],
  reducers: {
    delete(state: any, { payload: id }: any) {
      console.log('delete notle');
      return state.filter((item: any) => item.id !== id);
    }
  }
};
