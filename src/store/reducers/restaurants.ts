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

            let currentRestaurant = restaurantsState
            .find(restaurant => restaurant.id === restaurantId)

            currentRestaurant?.reviews.push(id);

            return [...restaurantsState]
        }
        default:
            return  restaurantsState
    }};