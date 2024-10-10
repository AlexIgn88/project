import { StateType } from '../../store/reducers';
import { createSelector } from '@reduxjs/toolkit';
import {
    RestaurantMenuType,
    NormalizedRestaurantsType,
    NormalizedReviewsTypeExtended,
    NormalizedReviewsType,
    DishesInObjectType,
    ReviewsInObjectType,
    UsersInObjectType,
    DishesInTheCart
} from '../../types';
import { CartState } from '../../store/reducers/cart';

interface OwnProps {
    id: any;
}

// interface OwnProps<T extends string | string[]> {
//     id: T;
// }

export const selectId = (_: StateType, ownProps: OwnProps) => ownProps.id;
export const selectCartItems = (state: StateType) => state.cart;
export const selectDishes = (state: StateType) => state.dishes;

// export const selectReviews = (state: StateType) => state.reviews;
// export const selectReviews = createSelector(
//     (state: StateType) => state.reviews,
//     (reviews) => reviews.toObject()
// );
// export const selectReviews = createSelector(
//     (state: StateType) => state.reviews,
//     (reviewsState) => reviewsState.entities
// );
export const selectReviews = (state: StateType) => state.reviews.entities;
export const selectReviewsLoading = (state: StateType) => state.reviews.loading;
export const selectReviewsLoaded = (state: StateType) => state.reviews.loaded;
export const selectReviewsError = (state: StateType) => state.reviews.error;

export const selectUsers = (state: StateType) => state.users;

// export const selectRestaurants = (state: StateType) => state.restaurants;
// export const selectRestaurants = createSelector(
//     (state: StateType) => state.restaurants,
//     (restaurants) => restaurants.toJS()
// );
export const selectRestaurants = (state: StateType) => state.restaurants.entities;
export const selectRestaurantsLoading = (state: StateType) => state.restaurants.loading;
export const selectRestaurantsLoaded = (state: StateType) => state.restaurants.loaded;
export const selectRestaurantsError = (state: StateType) => state.restaurants.error;

export const selectRestaurantReviews = createSelector(
    selectReviews,
    selectRestaurants,
    selectId,
    selectUsers,
    (reviews: any, restaurants, restaurantId, users: UsersInObjectType) => {
        const activeRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId);
        const activeRestaurantReviewsId = activeRestaurant?.reviews;
        const activeRestaurantReviews = activeRestaurantReviewsId?.filter((reviewId: string) => reviews[reviewId] !== undefined)
            .map((reviewId: string) => reviews[reviewId])
        return activeRestaurantReviews?.map(review => ({
            ...review,
            userName: users[review?.userId]?.name
        }))
    }
);


export const selectDish = createSelector(
    selectDishes,
    selectId,
    (dishes, id) => {
        // return dishes.find(dish => dish.id === id)
        return dishes[id]
    }
);
// NormalizedReviewsTypeExtended
export const selectReview: (
    state: StateType,
    ownProps: OwnProps
) => NormalizedReviewsTypeExtended = createSelector(
    selectReviews,
    selectUsers,
    selectId,
    (reviews: ReviewsInObjectType, users: UsersInObjectType, id: string) => {
        const review: NormalizedReviewsType = reviews[id];
        return {
            ...review,
            userName: users[review?.userId]?.name
        }
    }
);

export const selectRestaurantRate = createSelector(
    selectReviews,
    selectId,
    (reviews: ReviewsInObjectType, idArr: Array<string>) => {
        const arrayOfReviews: Array<NormalizedReviewsType> = idArr
            .filter((id: string) => reviews[id] !== undefined)
            .map((id: string) => reviews[id]);
        // console.log('idArr', 'arrayOfReviews', idArr, arrayOfReviews);
        if (arrayOfReviews.length === 0) return 0

        const rateResult: number = arrayOfReviews
            .reduce((sum, { rating }) => sum + rating, 0) / arrayOfReviews.length;

        if (arrayOfReviews.length > 0) return Math.round(rateResult * 10) / 10
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
        return { ...allDishes[itemId], quantity: itemQuantity }
    })
}
