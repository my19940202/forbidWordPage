import React from 'react';
import {
    Modal, Form, Input, Select, Button
} from 'antd';
const {Item} = Form;
const {Option} = Select;

const addForm = ({form, dispatch}) => {
    const {getFieldDecorator} = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'dishes/add',
                    payload: {...values}
                })
            }
        });
    };
    const tips = '输入菜品名称';
    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 14}
    };
    return (
        <Form onSubmit={handleSubmit} layout="horizontal">
            <Item label="菜名" {...formItemLayout}>
                {getFieldDecorator('name', {
                    rules: [{required: true, message: tips}]
                })(
                    <Input placeholder={tips} name="name" />
                )}
            </Item>
            <Item label="原材料" {...formItemLayout}>
                {getFieldDecorator('ingredient', {
                    rules: [{
                        required: true,
                        message: tips
                    }]
                })(
                    <Select showSearch
                        style={{ width: 200 }}
                        placeholder="选取原材料">
                        <Option value="包菜">包菜</Option>
                        <Option value="香肠">香肠</Option>
                    </Select>
                )}
            </Item>
            <Item label="描述" {...formItemLayout}>
                {getFieldDecorator('desc', {
                    rules: [{required: false, message: '描述'}]
                })(
                    <Input placeholder={tips} name="desc" />
                )}
            </Item>
            <Item>
                <Button type="primary" htmlType="submit"
                    onClick={e => handleSubmit(e)}>
                    提交
                </Button>
            </Item>
            <p>TODO: 添加上传照片</p>
        </Form>
    );
}
export const DishAddModal = ({config: {dispatch, open, selectItem}}: any) => {
    let updateModal = (modal: boolean) => dispatch({
        type: 'dishes/updateModal',
        payload: {modal}
    });
    const cancel = () => {
        updateModal(false);
    }
    const AddForm = Form.create({ name: 'test_from' })(addForm);
    return (
        <Modal
            title="crete dishes"
            footer={null}
            visible={open}
            onCancel={cancel}
        >
            <AddForm dispatch={dispatch} />
        </Modal>
    );
};
