import React from 'react';
import { Row, Col } from 'antd';
import ProductList from './ProductList';
import { connect } from 'dva';

export class Test extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    console.log(props, 'props');
  }

  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            ths is index page
          </Col>
          <Col span={12}>
            <h3>ProductList</h3>
            <ProductList />
          </Col>
        </Row>
      </>
    );
  }
}

export default connect(({products}: any) => ({
  products
}))(Test);
