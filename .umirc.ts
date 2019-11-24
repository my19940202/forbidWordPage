import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  base: '/static',
  publicPath: './',
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
}

export default config;
