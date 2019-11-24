import React from 'react';
import {Card} from 'antd';

export const ProductList = ({products}: any) => {
  return (
    <>
      <Card title="卡片标题" bordered={true} style={{ width:300}}>
        {
          products.map((ele: any, idx: number) => {
            return (<p key={ele.name}>name:{ele.name}, content: {ele.email}</p>);
          })
        }
      </Card>
    </>
  );
};
