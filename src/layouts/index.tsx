import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = (props: any) => {
  if (props.location.pathname.indexOf('/test') !== -1) {
    return (<>{props.children}</>);
  }
  return (
    <div className={styles.normal}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>小红书禁用词查询工具</h1>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default BasicLayout;
