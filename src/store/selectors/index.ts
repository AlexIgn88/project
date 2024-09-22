import {StateType}  from '../../store/reducers';
import {createSelector} from '@reduxjs/toolkit';
import 
    { RestaurantMenuType, 
     NormalizedReviewsTypeExtended, 
     NormalizedReviewsType, 
     DishesInObjectType,
     ReviewsInObjectType, 
     UsersInObjectType,
     DishesInTheCart
    } from '../../types';
import {CartState} from '../../store/reducers/cart';

interface OwnProps {
    id: any;
}

export const selectId = (_: StateType, ownProps: OwnProps) => ownProps.id;
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

export const selectReview: (
state: StateType, 
ownProps: OwnProps
) => NormalizedReviewsTypeExtended = createSelector(
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

    export const selectDishesInTheCart = createSelector(
        selectCartItems, 
        selectDishes, 
        (cartItems, dishes) =>
        getDishesInTheCart(cartItems, dishes)
      );

      
    const getDishesInTheCart = (
        cartItems: CartState, 
        allDishes: DishesInObjectType
    ): Array<DishesInTheCart> => {

        const idAndQuantityArrays: Array<[string, number]> = Object.entries(cartItems);
        return idAndQuantityArrays.map(([itemId, itemQuantity]) => {
            return {...allDishes[itemId], quantity: itemQuantity}
            })     
    }
