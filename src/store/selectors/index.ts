import {StateType}  from '../../store/reducers';
import {createSelector} from '@reduxjs/toolkit';
// import {useCallback } from 'react';
// import {RestaurantMenuType} from '../../types';
// import {CartState} from '../../store/reducers/cart';


export const selectId = (state: StateType, ownProps: any) => ownProps.id;
export const selectCartItems = (state: StateType) => state.cart;
export const selectDishes = (state: StateType) => state.dishes;

export const selectDish = createSelector(
    selectDishes,
    selectId,
    (dishes, id) => {
        // return dishes.find(dish => dish.id === id)
        return dishes[id]
    }
)

    // export const selectDishesInTheCart = createSelector(selectCartItems, selectAllDishes, (cartItems, allDishes) =>
    //     getDishesInTheCart(cartItems, allDishes)
    //   )

      
    // export interface DishesInTheCartType extends RestaurantMenuType {
    //     quantity: number;
    // }

    // function getDishesInTheCart(
    //     cartItems: CartState, 
    //     allDishes: Array<RestaurantMenuType>
    // ): Array<DishesInTheCartType> {

    //     const idAndQuantityArrays: Array<[string, number]> = Object.entries(cartItems);
    //     return idAndQuantityArrays.map(([itemId, itemQuantity]) => {
    //         const dishInTheCart = allDishes.filter(dish => dish.id === itemId)[0];
    //         return {...dishInTheCart, quantity: itemQuantity}
    //         })
            
    // };
