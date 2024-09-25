// import ActionTypes from '../common';
import { v4 as uuidv4 } from 'uuid';

// const {ADD_REVIEW} = ActionTypes;

// export default store => next => action => {
//   const addReviewAction = action.type === ADD_REVIEW;
//   if (!addReviewAction) return next(action)
//     const {payload, ...restAction} = action;
//     const {id, ...restPayload} = payload;
//     if (!id) return next(restAction);
//     next({
//       ...restAction,
//       payload: {
//         ...restPayload,
//         id: uuidv4(),
//       },
//     })
//   }

export default store => next => action => {
  const { generateId, ...rest } = action
  if (!generateId) {
    next(rest)
  } else {
    const { payload } = action;
    const { id, ...restPayload } = payload;
    next({
      ...rest,
      payload: {
        ...restPayload,
        id: uuidv4(),
      },
    })
  }
}