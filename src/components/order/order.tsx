import style from './order.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {AppDispatch}  from '../../store';
import {State}  from '../../store/reducers';
import {useCallback, useMemo } from 'react';
import {CartState} from '../../store/reducers/cart'
import {RestaurantMenuType} from '../../types/fixturesTypes';
import {clearTheCart} from '../../store/action-creators';
import { Button } from "antd";

const Order = () => {
    const 
        cartItems = useSelector((state: State) => state.cart),
        allDishes = useSelector((state: State) => state.dishes);

    interface NormalizeCartItemsType extends RestaurantMenuType {
        quantity: number;
    }

    const normalizeCartItems = useCallback((
        cartItems: CartState, 
        allDishes: Array<RestaurantMenuType>): Array<NormalizeCartItemsType> => {
        const idAndQuantityArrays: Array<[string, number]> = Object.entries(cartItems);
        return idAndQuantityArrays.map(([itemId, itemQuantity]) => {
            const dishInTheCart = allDishes.filter(dish => dish.id === itemId)[0];
            return {...dishInTheCart, quantity: itemQuantity}
            })
    },[cartItems, allDishes]);

    const normalizedCartItems = useMemo(() => 
        normalizeCartItems(cartItems, allDishes), [cartItems, allDishes]);
    const fullPrice = useMemo(() => 
        normalizedCartItems.reduce((sum, current) => sum + current.price * current.quantity, 0), [cartItems]);

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
            {normalizedCartItems.map((item) => (
                <div
                key={item.id}
                >
                    <span>{item.name}&#160;</span><span>{item.quantity}</span>
                </div>)
            )}
        </div>
         <div>Full price: {fullPrice}</div>
         <Button 
         onClick={clearTheOrder}
         >
        Clear the order
        </Button>
        </div>)
}

export default Order;