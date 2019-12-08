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
                            ...values
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
    const genIngredientInitData = (str: string) => {
        let ret: number[] = [];
        if (!!str) {
            ret = str.split(',').map(ele => Number(ele));
        }
        return ret;
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
                    initialValue: genIngredientInitData(editData.ingredients)
                })(
                    <Select
                        mode="multiple" showSearch={true} placeholder="选取原材料"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {ingredients.map(ele
                            => <Option key={ele.id} value={ele.id}>{ele.name}</Option>)
                        }
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
            title={selectedItem && selectedItem.id ? '编辑菜肴' : '新建菜肴'}
            footer={null}
            visible={open}
            onCancel={cancel}
        >
            <AddForm dispatch={dispatch} editData={selectedItem} ingredients={ingredients} />
        </Modal>
    );
};
