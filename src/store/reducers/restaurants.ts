import {restaurants} from '../../fixtures';
import {RestaurantType} from '../../types/fixturesTypes';
import {Action} from '../../types/reducerTypes';
import {ADD_REVIEW, FAIL, FETCH_RESTAURANTS, START, SUCCESS} from '../common'

export const restaurantsReducer  = (
    restaurantsState: Array<RestaurantType> = restaurants, 
    action: Action
) => {

    return restaurantsState
    };