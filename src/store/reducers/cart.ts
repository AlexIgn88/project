import {ActionCartReducer} from '../../types/reducerTypes';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../common';

export interface cartState {
    [key: string]: number;
}

export const cartReducer  = (
    cartState: cartState | any = {}, 
    action: ActionCartReducer
) => {
    switch(action.type){
        case ADD_TO_CART: {
            const {id} = action.payload
            return {
              ...cartState,
              [id]: cartState[id] ? cartState[id] + 1 : 1,
            }
          }
        case REMOVE_FROM_CART: {
            const {id} = action.payload
            if (!cartState[id]) {
              return cartState
            }
            return {
              ...cartState,
              [id]: cartState[id] - 1,
            }
          }
        default: {
          return cartState
        }
    }
    };