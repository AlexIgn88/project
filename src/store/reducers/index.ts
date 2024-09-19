import {combineReducers} from 'redux';
import {restaurantsReducer} from './restaurants';
import {cartReducer} from './cart';
import {countReducer} from './count';

export const reducer = combineReducers({
    // counter: (counterState: number = 0, action: Action) => {
    //     // console.log('action',action);
    //     return action.type === 'INCREASE' ? counterState + 1 : counterState
    // },
    counter: countReducer,
    restaurants: restaurantsReducer,
    cart: cartReducer,
});

export type State = ReturnType<typeof reducer>;