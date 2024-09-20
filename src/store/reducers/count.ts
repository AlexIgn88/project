import ActionTypes from '../common';
import {Action} from '../../types/reducerTypes';

const {INCREMENT, DECREMENT} = ActionTypes;

export const countReducer = (countState: number = 10, action: Action) => {
  switch (action.type) {
    case INCREMENT: {
      return countState + 1
    }
    case DECREMENT: {
      return countState <= 0 ? 0 : countState - 1
    }
    default: {
      return countState
    }
  }
}
