import React from 'react';
import {
    Button, Row, Col, Input, Form, Checkbox, Icon
} from 'antd';
import {DishTable} from '../../components/DishTable';
import {DishAddModal} from '../../components/DishAddModal';
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
        console.log('Received values of form: ', err, values);
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
    dishes: any[];
    dispatch: any;
}
class Test extends React.Component<propsInterface, {}> {
    constructor(props: any) {
        super(props);
        this.updateModal = this.updateModal.bind(this);
    }
    updateModal(event: MouseEvent) {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'dishes/updateModal',
            payload: {modal: true}
        });
    }
    render() {
        // const WrappedTestForm: any = Form.create({ name: 'test_from' })(TestForm);
        let dishes: any = this.props.dishes;
        let dispatch = this.props.dispatch;
        let modalConfig = {
            dispatch,
            open: dishes.modal,
            selectItem: null,
        }
        let me = this;
        return (<>
            <Row>
                <Button type="primary" icon="plus" onClick={me.updateModal} />
            </Row>
            <Row>
                <DishTable data={dishes} />
            </Row>
            <DishAddModal config={modalConfig} />
        </>);
    }
}

const TestWrapper = ({ dispatch, dishes}: any) => {
  return <Test dispatch={dispatch} dishes={dishes} />;
}

export default connect(({dispatch, dishes}: any) => ({
  dishes
}))(TestWrapper);
