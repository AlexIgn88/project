import {StateType}  from '../../store/reducers';
import {createSelector} from '@reduxjs/toolkit';
// import {useCallback } from 'react';
import {NormalizedReviewsTypeExtended, NormalizedReviewsType} from '../../types';
// import {CartState} from '../../store/reducers/cart';

export const selectId = (state: StateType, ownProps: any) => ownProps.id;
export const selectCartItems = (state: StateType) => state.cart;
export const selectDishes = (state: StateType) => state.dishes;
export const selectReviews = (state: StateType) => state.reviews;
export const selectUsers = (state: StateType) => state.users;
export const selectRestaurants = (state: StateType) => state.restaurants;

export const selectDish = createSelector(
    selectDishes,
    selectId,
    (dishes, id) => {
        // return dishes.find(dish => dish.id === id)
        return dishes[id]
    }
);

export const selectReview = createSelector(
    selectReviews,
    selectUsers,
    selectId,
    (reviews, users, id) => {
        const review = reviews[id];
        return {
            ...review,
            userName: users[review.userId].name
        }
    }
);

export const selectRestaurantRate = createSelector(
    selectReviews,
    selectId,
    (reviews, idArr) => {
        const arrayOfReviews: Array<NormalizedReviewsType> = idArr.map((id: string) => reviews[id]);
        if (arrayOfReviews.length === 0 ) return 0

        const rateResult: number = arrayOfReviews
        .reduce((sum, {rating}) => sum + rating, 0) / arrayOfReviews.length;

        if (arrayOfReviews.length > 0 ) return Math.round(rateResult * 10) / 10
    }
);

// export const selectRestaurantReviews= createSelector(
//     selectReviews,
//     selectRestaurants,
//     (reviews, restaurants) => {
//         // return dishes.find(dish => dish.id === id)
//         return reviews[id]
//     }
// )

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
