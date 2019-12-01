import React from 'react';
import {Layout, Menu, Breadcrumb } from 'antd';
import Link from 'umi/link';

import styles from './index.css';

const MenuLayout: React.FC = props => {
  return (
  <Layout>
    <Layout.Header className="header">
      <div className="user-center">
        lalalala
      </div>
    </Layout.Header>
    <Layout>
      <Layout.Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['index']}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key="index">
                <Link to="/test/">菜谱小工具</Link>
              </Menu.Item>
              <Menu.Item key="test">
                <Link to="/test/test">测试</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/test/aboutus">关于我们</Link>
              </Menu.Item>
              <Menu.Item key="more">
                <Link to="/test/more">更多信息</Link>
              </Menu.Item>
          </Menu>
      </Layout.Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>八斗会</Breadcrumb.Item>
            </Breadcrumb>
            <Layout.Content style={{background: '#fff',padding: 24,margin: 0, minHeight: 280}}>
              {props.children}
            </Layout.Content>
        </Layout>
    </Layout>
    <Layout.Footer style={{ textAlign: 'center' }}>footer</Layout.Footer>
  </Layout>
  );
};

export default MenuLayout;