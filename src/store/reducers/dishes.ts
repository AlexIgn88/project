// import {restaurants} from '../../fixtures';
import {RestaurantMenuType, dishesInObjectType} from '../../types';
import {Action} from '../../types';
import {normalizedDishes} from '../../fixtures';

// const allDishes = restaurants.flatMap(restaurant => restaurant.menu);

const initialState = normalizedDishes.reduce((dishes, dish) => {
    return {
        ...dishes,
        [dish.id]: dish
    }
}, {});

export const dishesReducer = (
    // dishesState: Array<RestaurantMenuType> = normalizedDishes,
    dishesState: dishesInObjectType = initialState,
    action: Action
) => {

    return dishesState
    };


