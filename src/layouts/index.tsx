import React from 'react';
import styles from './index.css';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

const BasicLayout = ({dispatch, products, children, location}: any) => {
  if (location.pathname.indexOf('/test') !== -1) {
    return (<>{children}</>);
  }
  return (
    <div className={styles.normal}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>小红书禁用词查询工具</h1>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

export default withRouter(connect(({app}: any) => ({
  app
}))(BasicLayout));
