import {restaurants, normalizedRestaurants} from '../../fixtures';
import {RestaurantType, NormalizedRestaurantsType} from '../../types';
import {Action} from '../../types';
import ActionTypes from '../common';

const {ADD_REVIEW, FAIL, FETCH_RESTAURANTS, START, SUCCESS} = ActionTypes;

export const restaurantsReducer  = (
    restaurantsState: Array<NormalizedRestaurantsType> = normalizedRestaurants, 
    action: Action
) => {
    switch (action.type) {
        case ADD_REVIEW: {
            const {restaurantId, id} = action.payload;

            const currentRestaurant: NormalizedRestaurantsType | undefined = restaurantsState
            .find(restaurant => restaurant.id === restaurantId)
            if (!currentRestaurant) return restaurantsState

            // currentRestaurant?.reviews.push(id);
            // return [...restaurantsState]
            const updatedRestaurant: NormalizedRestaurantsType = {
                ...currentRestaurant,
                reviews: [...currentRestaurant?.reviews, id]
            }
            return restaurantsState.map(restaurant =>
                restaurant === currentRestaurant ? updatedRestaurant : restaurant
            )
        }
        default:
            return  restaurantsState
    }};