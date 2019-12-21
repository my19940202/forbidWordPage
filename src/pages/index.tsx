import React from 'react';
import {
    Button, Row, Col, Input, Form, Checkbox, Icon
} from 'antd';
import {DishTable} from '../components/DishTable';
import {DishAddModal} from '../components/DishAddModal';
import {IngredientAddModal} from '../components/IngredientAddModal';
import { connect } from 'dva';

interface PropsInterface {
    dishes: any[];
    dispatch: any;
}
class Test extends React.Component<PropsInterface, {}> {
    constructor(props: any) {
        super(props);
        this.updateModal = this.updateModal.bind(this);
        this.openIngredientModal = this.openIngredientModal.bind(this);
    }
    updateModal(event: MouseEvent) {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'dishes/updateModal',
            payload: {modal: true}
        });
        dispatch({
            type: 'dishes/updateSelected',
            payload: {selectedItem: {}}
        });
    }

    openIngredientModal(event: MouseEvent) {
        let dispatch = this.props.dispatch;
        dispatch({
            type: 'dishes/updateIngredients',
            payload: {ingredientsModal: true}
        });
    }
    render() {
        let dishes: any = this.props.dishes;
        let dispatch = this.props.dispatch;
        let modalConfig = {
            dispatch,
            open: dishes.modal,
            selectedItem: dishes.selectedItem,
            ingredients: dishes.ingredients
        }
        let me = this;
        return (<>
            <Row>
                <Button type="primary" icon="plus" onClick={me.updateModal}>
                    菜肴
                </Button>
                <Button style={{marginLeft: 15}} type="primary" icon="plus" onClick={me.openIngredientModal}>
                    原材料
                </Button>
            </Row>
            <Row style={{marginTop: 15}}>
                <DishTable data={dishes} dispatch={dispatch} />
            </Row>
            <DishAddModal config={modalConfig} />
            <IngredientAddModal dispatch={dispatch} open={dishes.ingredientsModal}/>
        </>);
    }
}

const IndexWrapper = ({ dispatch, dishes}: any) => {
  return <Test dispatch={dispatch} dishes={dishes} />;
}

export default connect(({dispatch, dishes}: any) => ({
  dishes
}))(IndexWrapper);
