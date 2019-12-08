import React from 'react';
import {Table, Spin, Button, Tag} from 'antd';
import {isEmpty} from 'lodash';

export const DishTable = ({dispatch, data: {ingredients, list, total}}: any) => {
    const dispatchEdit = (id) => dispatch({
        type: 'dishes/edit',
        payload: {
            id,
        }
    });
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
    const deleteDishes = (id) => {
        dispatch({
            type: 'dishes/deleteDishes',
            payload: {id}
        });
    };
    const columns = [{
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '原材料',
        dataIndex: 'ingredients',
        key: 'ingredients',
        render: (text, record) => {
            let ret: []|null = null;
            if (record.ingredients && ingredients) {
                ret = record.ingredients.split(',').map((ele: 'string', idx: number) =>{
                    const target = ingredients.find(item => +item.id === +ele);
                    if (!isEmpty(target)) {
                        return (
                            <Tag key={String(idx)}>{target.name}</Tag>
                        );
                    }
                });
            }
            return ret;
        }
    }, {
        title: 'desc',
        dataIndex: 'desc',
        key: 'desc',
    }, {
        title: '创建时间',
        dataIndex: 'createtime',
        key: 'createtime',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type="primary" icon="edit" onClick={e => editEvent(record)}/>&nbsp;
                <Button type="primary" icon="delete" onClick={e => deleteDishes(record.id)}/>
            </span>
        )
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
