import React from 'react';
import {Layout, Menu, Breadcrumb } from 'antd';
import Link from 'umi/link';

import styles from './index.css';

const MenuLayout: React.FC = props => {
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

export default MenuLayout;
