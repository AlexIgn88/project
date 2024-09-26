// import {restaurants} from '../../fixtures';
import { RestaurantMenuType, DishesInObjectType } from '../../types';
import { Action } from '../../types';
import { normalizedDishes } from '../../fixtures';
import { arrayToMap } from '../utils';
import ActionTypes from '../common';

const {
    FETCH_DISHES,
    SUCCESS
} = ActionTypes;

// const allDishes = restaurants.flatMap(restaurant => restaurant.menu);

// const initialState = normalizedDishes.reduce((dishes, dish) => {
//     return {
//         ...dishes,
//         [dish.id]: dish
//     }
// }, {});

const initialState = arrayToMap(normalizedDishes);

export const dishesReducer = (
    // dishesState: Array<RestaurantMenuType> = normalizedDishes,
    dishesState: DishesInObjectType = {},
    action: Action
) => {
    if (action.type === FETCH_DISHES + SUCCESS) {
        // return dishesState
        if (!action.response) return dishesState
        return arrayToMap(action.response)
    }

    return dishesState
};
