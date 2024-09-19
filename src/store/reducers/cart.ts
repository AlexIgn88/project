import {ActionCartReducer} from '../../types/reducerTypes';
import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_THE_CART} from '../common';

export interface CartState {
    [key: string]: number;
}

export const cartReducer  = (
    cartState: CartState | any = {}, 
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
          case CLEAR_THE_CART: {
              return {}
          }
        default: {
          return cartState
        }
    }
    };