import { restaurants, normalizedRestaurants } from '../../fixtures';
import { RestaurantType, NormalizedRestaurantsType } from '../../types';
import { ActionRestaurants } from '../../types';
import ActionTypes from '../common';
// import { List } from 'immutable';
// import { fromJS } from 'immutable';
import { produce } from 'immer';

const {
    ADD_REVIEW,
    FAIL,
    FETCH_RESTAURANTS,
    START, SUCCESS
} = ActionTypes;

// const initialStateList = List(normalizedRestaurants);

const initialStateList: [] = [];
// export type initialStateListType = typeof initialStateList;

export const restaurantsReducer = (
    restaurantsState: Array<NormalizedRestaurantsType> | [] = initialStateList,
    action: ActionRestaurants
) =>
    // {
    //     switch (action.type) {
    //         case ADD_REVIEW: {
    //             const { restaurantId, id } = action.payload;
    //             // const currentRestaurant: NormalizedRestaurantsType | undefined = restaurantsState
    //             // .find(restaurant => restaurant.id === restaurantId)
    //             // if (!currentRestaurant) return restaurantsState
    //             // // currentRestaurant?.reviews.push(id);
    //             // // return [...restaurantsState]
    //             // const updatedRestaurant: NormalizedRestaurantsType = {
    //             //     ...currentRestaurant,
    //             //     reviews: [...currentRestaurant?.reviews, id]
    //             // }
    //             // return restaurantsState.map(restaurant =>
    //             //     restaurant === currentRestaurant ? updatedRestaurant : restaurant
    //             // )


    //             const currentRestaurantIndex = restaurantsState
    //                 .findIndex((restaurant) => restaurant.id === restaurantId);
    //             const currentRestaurant = restaurantsState.get(currentRestaurantIndex);
    //             if (!currentRestaurant) return restaurantsState
    //             return restaurantsState.setIn(
    //                 [currentRestaurantIndex, 'reviews'],
    //                 [...currentRestaurant?.reviews, id]
    //                 // currentRestaurant.get('reviews').push(id)
    //                 // [...currentRestaurant.get('reviews'), id]
    //             )


    //         }
    //         default:
    //             return restaurantsState
    //     }
    // };
    produce(restaurantsState, (draft) => {
        switch (action.type) {
            case FETCH_RESTAURANTS + SUCCESS: {
                return action.response
            }
            case ADD_REVIEW: {
                const { restaurantId, id } = action.payload;
                const activeRestaurant: NormalizedRestaurantsType | undefined = draft
                    .find(restaurant => restaurant.id === restaurantId)
                if (!activeRestaurant) return restaurantsState

                activeRestaurant.reviews.push(id)
                break
            }
            default:
                return
        }
    })




