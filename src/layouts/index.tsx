import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>广告禁用词查询工具</h1>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
};

export default BasicLayout;
