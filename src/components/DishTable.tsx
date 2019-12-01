import React from 'react';
import {Table, Spin, Button} from 'antd';
import {isEmpty} from 'lodash';

export const DishTable = ({dispatch, data: {list, total}}: any) => {
    const dispatchEdit = (id) => dispatch({
        type: 'dishes/edit',
        payload: {
            id,
        }
    })
    const editEvent = (item) => {
        dispatch({
            type: 'dishes/updateSelected',
            payload: {selectedItem: item}
        });
        dispatch({
            type: 'dishes/updateModal',
            payload: {modal: true}
        });
    };
    const columns = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
    }, {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type="primary" icon="edit" onClick={e => editEvent(record)}/>&nbsp;
                <Button type="primary" icon="delete"/>
            </span>
        ),
    }];

    return (
        <>
            <Spin spinning={isEmpty(list)} delay={500}>
                <Table
                    rowKey="id"
                    dataSource={list || []}
                    columns={columns}
                />
            </Spin>
        </>
    );
};
