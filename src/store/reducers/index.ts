import {combineReducers} from 'redux';
import {restaurantsReducer} from './restaurants';
import {cartReducer} from './cart';
import {countReducer} from './count';
import {dishesReducer} from './dishes';
import {reviewsReducer} from './reviews';
import { usersReducer } from './users';

export const reducer = combineReducers({
    counter: countReducer,
    restaurants: restaurantsReducer,
    cart: cartReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
});

export type StateType = ReturnType<typeof reducer>;