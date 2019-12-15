import React from 'react';
import {
  Button, Row, Col, Input, Form, Checkbox, Icon
} from 'antd';
import {ProductList} from '../../components/ProductList';
import { connect } from 'dva';

interface TestFormInterface {
  dispatch: any;
}
class TestForm extends React.Component<TestFormInterface, {}> {
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'products/add',
          payload: {...values}
        })
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched }
    } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input placeholder="enter your email" prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="name" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="enter your name"
              />
            )}
        </Form.Item>
        {/* <Form.Item>
          <Checkbox>remeber me</Checkbox>
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={e => this.handleSubmit(e)}>add</Button>
        </Form.Item>
      </Form>
    );
  }
}

interface propsInterface {
  products: any[];
  dispatch: any;
}
class Test extends React.Component<propsInterface, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const WrappedTestForm: any = Form.create({ name: 'test_from' })(TestForm);
    let products = this.props.products;
    let dispatch = this.props.dispatch;
    return (
      <>
        <Row>
          <Col span={12}>
            <h3>antd form</h3>
            <WrappedTestForm dispatch={dispatch} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <h3>ProductList</h3>
            <ProductList products={products}/>
          </Col>
        </Row>
      </>
    );
  }
}

const TestWrapper = ({ dispatch, products}: any) => {
  return <Test dispatch={dispatch} products={products} />;
}

export default connect(({dispatch, products}: any) => ({
  products
}))(TestWrapper);
