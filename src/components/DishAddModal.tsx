import React from 'react';
import {
    Modal, Form, Input, Select, Button
} from 'antd';
const {Item} = Form;
const {Option} = Select;

const addForm = ({form, dispatch, editData, ingredients}) => {
    const {getFieldDecorator} = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                if (editData && editData.id) {
                    dispatch({
                        type: 'dishes/edit',
                        payload: {
                            id: editData.id,
                            body: values
                        }
                    });
                }
                else {
                    dispatch({
                        type: 'dishes/add',
                        payload: {...values}
                    });
                }
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
                    rules: [{required: true, message: tips}],
                    initialValue: editData && editData.name || ''
                })(
                    <Input placeholder={tips} name="name" />
                )}
            </Item>
            <Item label="原材料" {...formItemLayout}>
                {getFieldDecorator('ingredient', {
                    rules: [{
                        required: true,
                        message: tips
                    }],
                    initialValue: editData && editData.ingredients || []
                })(
                    <Select mode="multiple" showSearch={true} placeholder="选取原材料">
                        {ingredients.map(ele
                            => <Option key={ele.id} value={ele.id}>{ele.name}</Option>)
                        }
                        <Option value='1'>白菜</Option>
                    </Select>
                )}
            </Item>
            <Item label="描述" {...formItemLayout}>
                {getFieldDecorator('desc', {
                    rules: [{required: false, message: '描述'}],
                    initialValue: editData && editData.desc || ''
                })(<Input placeholder="输入描述" name="desc" />)}
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

export const DishAddModal = ({config: {dispatch, open, selectedItem, ingredients}}: any) => {
    const cancel = () => {
        dispatch({
            type: 'dishes/updateModal',
            payload: {modal: false}
        });
    };
    const AddForm = Form.create({ name: 'test_from' })(addForm);
    return (
        <Modal
            title="crete dishes"
            footer={null}
            visible={open}
            onCancel={cancel}
        >
            <AddForm dispatch={dispatch} editData={selectedItem} ingredients={ingredients} />
        </Modal>
    );
};
