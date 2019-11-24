import store2 from 'store2'
import { message } from 'antd'
console.log(' this is init app state');

export const dva = {
  config: {
    onError(err: any) {
      console.log(err, 'error');
      err.preventDefault();
      message.error(err.msg)
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
