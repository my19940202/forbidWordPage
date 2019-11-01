import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>广告禁用词查询工具</h1>
        <div class={styles.tips}>
          新广告法禁用词已用<span style={{color: 'red'}}>红色</span>高亮字体标出,请您参考修改，审慎发布
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
