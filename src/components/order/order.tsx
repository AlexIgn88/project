import style from './order.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {AppDispatch}  from '../../store';
import {StateType}  from '../../store/reducers';
import {useCallback, useMemo, memo, useState, useEffect } from 'react';
// import {CartState} from '../../store/reducers/cart';
import {
    // RestaurantMenuType, DishesInObjectType, 
    DishesInTheCart} from '../../types';
import {clearTheCart } from '../../store/action-creators';
import { Button } from "antd";
import {DecreaseButton, IncreaseButton} from '../cart-buttons';
import {selectDishesInTheCart} from '../../store/selectors';

const Order = () => {
    const dishesInTheCart: Array<DishesInTheCart> = useSelector(
        (state: StateType) => selectDishesInTheCart(state));

    const fullPrice = useMemo(() => dishesInTheCart
    .reduce((sum, current) => sum + current?.price * current?.quantity, 0), 
    [dishesInTheCart]);

    const dispatch = useDispatch<AppDispatch>();
    const clearTheOrder = useCallback(() => dispatch(clearTheCart()),[dispatch]);
    // console.log('Order');
    return (
        <div
        className={style.cart}
        >
        <div>Your order</div>
        <div>
            <div 
            >
                <span>Positions&#160;</span><span>Quantity</span>
            </div>
            {dishesInTheCart.map(({
                id, 
                name, 
                quantity
            }) => (
                <div
                key={id}
                >
                    <div>
                        <span>{name}&#160;</span>
                        <span>{quantity}</span>
                    </div>
                    <div>
                        <DecreaseButton id={id}/>
                        <IncreaseButton id={id}/>
                    </div>
                </div>)
            )}
        </div>
         <div>Full price: {fullPrice}</div>
         <Button 
         onClick={clearTheOrder}
         >
        Сancellation
        </Button>
        </div>)
}

export default memo(Order);