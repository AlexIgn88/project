import {restaurants} from '../../fixtures';
import {RestaurantMenuType} from '../../types/fixturesTypes';
import {Action} from '../../types/reducerTypes';

const allDishes = restaurants.flatMap(restaurant => restaurant.menu);

export const dishesReducer = (
    dishesState: Array<RestaurantMenuType> = allDishes,
    action: Action
) => {

    return dishesState
    };


