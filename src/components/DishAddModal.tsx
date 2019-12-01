import React from 'react';
import {Modal, Form} from 'antd';
const {Item} = Form;

export const DishAddModal = ({config: {dispatch, open, selectItem}}: any) => {
    let updateModal = (modal: boolean) => dispatch({
        type: 'dishes/updateModal',
        payload: {modal}
    });
    const confirm = () => {
        console.log('i am ok');
        updateModal(false);
    }
    const cancel = () => {
        console.log('i am cancel');
        updateModal(false);
    }
    return (
        <Modal
            title="crete dishes"
            visible={open}
            onOk={confirm}
            onCancel={cancel}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};
