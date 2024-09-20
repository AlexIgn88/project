import {ActionCartReducer} from '../../types';
import ActionTypes from '../common';

const {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_THE_CART} = ActionTypes;

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
          const updatedCartState = { ...cartState }; 
          if (updatedCartState[id] === 1) {
          delete updatedCartState[id]; 
          } else {
          updatedCartState[id] -= 1; 
          }
        return updatedCartState;
    }
          case CLEAR_THE_CART: {
              return {}
          }
        default: {
          return cartState
        }
    }
    };