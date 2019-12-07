import React from 'react';
import {
    Modal, Form, Input, Select, Button
} from 'antd';
const {Item} = Form;
const {Option} = Select;

const form = ({form, dispatch}: any) => {
    const {getFieldDecorator} = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'dishes/addIngredient',
                    payload: {
                        body: values
                    }
                });
            }
        });
    };
    const tips = '输入原材料名称';
    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 14}
    };
    return (
        <Form onSubmit={handleSubmit} layout="horizontal">
            <Item label="名称" {...formItemLayout}>
                {getFieldDecorator('name', {
                    rules: [{
                        required: true,
                        message: '必填'
                    }]
                })(
                    <Input placeholder="输入材料名称" name="name" />
                )}
            </Item>
            <Item label="描述" {...formItemLayout}>
                {getFieldDecorator('desc', {
                    rules: [{required: false, message: '描述'}]
                })(<Input placeholder="输入材料描述" name="desc" />)}
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" onClick={e => handleSubmit(e)}>
                    提交
                </Button>
            </Item>
            <p>TODO: 添加上传照片</p>
        </Form>
    );
};

export const IngredientAddModal = ({dispatch, open}: any) => {
    const cancel = () => {
        dispatch({
            type: 'dishes/updateIngredients',
            payload: {ingredientsModal: false}
        });
    };
    const IngredientForm = Form.create({ name: 'test_from' })(form);
    return (
        <Modal
            title="新建材料"
            footer={null}
            visible={open}
            onCancel={cancel}
        >
            <IngredientForm dispatch={dispatch} />
        </Modal>
    );
};
