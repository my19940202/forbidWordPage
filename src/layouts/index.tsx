import React from 'react';
import {Layout, Menu, Breadcrumb } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

const BasicLayout = (props: any) => {
  if (location.pathname.indexOf('/forbid') !== -1) {
    return (<>{props.children}</>);
  }
  return (
    <Layout>
        <Layout.Header className="header">
            <div className="user-center">
                奚圣波的个人测试网站
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
                    <Link to="/">菜谱小工具</Link>
                </Menu.Item>
                <Menu.Item key="test">
                    <Link to="/test">测试</Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>-</Breadcrumb.Item>
                </Breadcrumb>
                <Layout.Content style={{background: '#fff',padding: 24,margin: 0, minHeight: 280}}>
                {props.children}
                </Layout.Content>
            </Layout>
        </Layout>
        <Layout.Footer style={{ textAlign: 'center' }}>copyright: xishengbo1994@163.com</Layout.Footer>
    </Layout>
  );
};

export default withRouter(connect(({app}: any) => ({
  app
}))(BasicLayout));
