import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  base: '/',
  publicPath: './',
//   define: {
//     'process.env.dev': true
//   },
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/index', component: '../pages/index' }
  //     ]
  //   },
  //   {
  //     path: '/test',
  //     component: '../layouts/menu',
  //     routes: [
  //       { path: '/test/', component: '../pages/test/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'forbidWordPage',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  // 本地调试 做跨域处理
  proxy: {
    '/api': {
      target: 'http://localhost:8700',
      changeOrigin: true
    }
  }
};

export default config;
