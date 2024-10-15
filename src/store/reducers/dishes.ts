import { DishesInObjectType } from '../../types';
import { Action } from '../../types';
import { arrayToMap } from '../utils';
import ActionTypes from '../common';

const {
    FETCH_DISHES,
    SUCCESS
} = ActionTypes;

export const dishesReducer = (
    dishesState: DishesInObjectType = {},
    action: Action
) => {
    if (action.type === FETCH_DISHES + SUCCESS) {
        if (!action.response) return dishesState
        return arrayToMap(action.response)
    }

    return dishesState
};
