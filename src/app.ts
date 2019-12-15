import store2 from 'store2'
import { message } from 'antd'

export const dva = {
  config: {
    onError(err: any) {
      console.log(err, 'error');
      err.preventDefault();
      message.error(JSON.stringify(err));
    },
    initialState: {
      products: [
        { name: 'dva', email: 1 },
        { name: 'antd', email: 2 },
      ]
    },
    onStateChange(state: any) {
      // console.log('onStateChange', state);
    }
  },
};
