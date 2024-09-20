import {RestaurantMenuType} from '../../types';
import { Button, Card, Typography } from 'antd';
import counter from '../../decorators/counter';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useCallback } from 'react';
import {addToCart, removeFromCart} from '../../store/action-creators';
// import {cartState}  from '../../store/reducers/cart';
import {StateType}  from '../../store/reducers';
import {AppDispatch}  from '../../store';
// import {ActionCartReducer} from '../../types/reducerTypes';
import {DecreaseButton, IncreaseButton} from '../cart-buttons';
import {selectDish} from '../../store/selectors';

// interface dishProps {
//     dish: RestaurantMenuType;
//     amount: number;
//     increase: () => void;
//     decrease: () => void;
// }

interface dishPropsNormalized {
    id: string;
    // dish: RestaurantMenuType | undefined;
    dish: RestaurantMenuType;
    // amount: number;
    // increase: () => void;
    // decrease: () => void;
}

const Dish = (props: any) => {
    const {
        id,
        dish: {name, price},
        // dish: {name, price},
        // amount,
        // increase,
        // decrease
    } = props;

    const amount: number = useSelector((state: StateType) => state.cart[id]) || 0;
    // console.log('Dish');


    return (
        <Card
        title={name}
        data-testid="DISH"
        >
            <Typography.Paragraph>
                Price: {price}
            </Typography.Paragraph>
            <div>
                <div 
                data-testid="AMOUNT">
                {amount}
                </div>
                <DecreaseButton id={id}/>
                <IncreaseButton id={id}/>
            </div>
        </Card>
    )
}

const mapStateToProps = (state: StateType, ownProps: any) => {
    return {
        dish: selectDish(state, ownProps)
    }
}

// export default counter(Dish);
export default connect(mapStateToProps)(Dish);