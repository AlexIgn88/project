import style from './order.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {AppDispatch, store}  from '../../store';
import {StateType}  from '../../store/reducers';
import {useCallback, useMemo, memo, useState, useEffect } from 'react';
import {CartState} from '../../store/reducers/cart'
import {RestaurantMenuType, dishesInObjectType} from '../../types';
import {clearTheCart } from '../../store/action-creators';
import { Button } from "antd";
import {DecreaseButton, IncreaseButton} from '../cart-buttons';



const Order = () => {
    const 
        cartItems = useSelector((state: StateType) => state.cart),
        allDishes = useSelector((state: StateType) => state.dishes);

    interface DishesInTheCart extends RestaurantMenuType {
        quantity: number;
    }

    const getDishesInTheCart = useCallback((
        cartItems: CartState, 
        allDishes: dishesInObjectType
    ): Array<DishesInTheCart> => {

        const idAndQuantityArrays: Array<[string, number]> = Object.entries(cartItems);
        return idAndQuantityArrays.map(([itemId, itemQuantity]) => {
            // const dishInTheCart = allDishes.filter(dish => dish.id === itemId)[0];
            // return {...dishInTheCart, quantity: itemQuantity}
            return {...allDishes[itemId], quantity: itemQuantity}
            })     
    },[cartItems, allDishes]);

    const dishesInTheCart = useMemo(() => 
        getDishesInTheCart(cartItems, allDishes), [cartItems, allDishes]);
    console.log('Order');
    const fullPrice = useMemo(() => 
        dishesInTheCart.reduce((sum, current) => sum + current?.price * current?.quantity, 0), [dishesInTheCart]);

    const dispatch = useDispatch<AppDispatch>();
    const clearTheOrder = useCallback(() => dispatch(clearTheCart()),[dispatch]);

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