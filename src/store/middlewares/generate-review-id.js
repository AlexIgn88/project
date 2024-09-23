import ActionTypes from '../common';
import { v4 as uuidv4 } from 'uuid';

const {ADD_REVIEW} = ActionTypes;

export default store => next => action => {
  const addReviewAction = action.type === ADD_REVIEW;
  if (!addReviewAction) {
    next(action)
  } else {
    const {payload, ...restAction} = action;
    const {id, ...restPayload} = payload;
  if (!id) {
    next(restAction)
  } else {
    next({
      ...restAction,
      payload: {
        ...restPayload,
        // id: Date.now() +'',
        id: uuidv4(),
      },
    })
  }
  }


}