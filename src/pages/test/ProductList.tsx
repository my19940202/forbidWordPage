import React from 'react';
import {Card} from 'antd';
import { connect } from 'dva';

const ProductList = ({onClick, products}: any) => {
  return (
    <>
      <Card title="卡片标题" bordered={true} style={{ width:300}}>
        {
          products.map((ele: any, idx: number) => {
            return (<p key={ele.id}>idx:{ele.id}, content: {ele.name}</p>);
          })
        }
      </Card>
    </>
  );
};

export default connect(({products}: any) => ({
  products,
}))(ProductList);
