import {combineReducers} from 'redux';
import {restaurantsReducer} from './restaurants';
import {cartReducer} from './cart';
import {countReducer} from './count';
import {dishesReducer} from './dishes';

export const reducer = combineReducers({
    counter: countReducer,
    restaurants: restaurantsReducer,
    cart: cartReducer,
    dishes: dishesReducer,
});

export type StateType = ReturnType<typeof reducer>;