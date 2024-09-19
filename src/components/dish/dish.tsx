import {RestaurantMenuType} from '../../types/fixturesTypes';
import { Button, Card, Typography } from 'antd';
import counter from '../../decorators/counter';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {addToCart, removeFromCart} from '../../store/action-creators';
// import {cartState}  from '../../store/reducers/cart';
import {State}  from '../../store/reducers';
import {AppDispatch}  from '../../store';
// import {ActionCartReducer} from '../../types/reducerTypes';

interface dishProps {
    dish: RestaurantMenuType;
    amount: number;
    increase: () => void;
    decrease: () => void;
}

const Dish = (props: dishProps) => {
    const {
        dish: {id, name, price},
        // amount,
        // increase,
        // decrease
    } = props;

    const dispatch = useDispatch<AppDispatch>();

    const increase = useCallback(() => dispatch(addToCart(id)),[dispatch, id]);
    const decrease = useCallback(() => dispatch(removeFromCart(id)),[dispatch, id]);
    const amount: number = useSelector((state: State) => state.cart[id]) || 0;

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
                <Button 
                onClick={decrease}
                type='primary'
                // disabled={amount <= 0}
                data-testid="DECREASE"
                >
                -
                </Button>
                <Button 
                onClick={increase}
                type='primary'
                data-testid="INCREASE"
                >
                +
                </Button>
            </div>
        </Card>
    )
}

export default counter(Dish);