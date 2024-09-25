// import ActionTypes from '../common';
import { v4 as uuidv4 } from 'uuid';
import { selectUsers } from '../selectors';

// const { ADD_REVIEW } = ActionTypes;

// export default store => next => action => {
//     const addReviewAction = action.type === ADD_REVIEW;
//     if (!addReviewAction) return next(action);
//     const { payload, ...restAction } = action;
//     const { userId, userName, ...restPayload } = payload;
//     if (!userId) return next(restAction);
//         const user = selectUsers(store.getState())[userId]
//         // console.log('user', user);
//         next({
//             ...restAction,
//             payload: {
//                 ...restPayload,
//                 userId: user ? user.id : uuidv4(),
//                 userName: user ? user.name : userName,
//             }
//         });
//     }

export default store => next => action => {
    const { provideUserId, ...rest } = action
    if (!provideUserId) {
        next(rest)
    } else {
    const { payload } = action;
    const { userId, userName, ...restPayload } = payload;

        const user = selectUsers(store.getState())[userId]
        // console.log('user', user);
        next({
            ...rest,
            payload: {
                ...restPayload,
                userId: user ? user.id : uuidv4(),
                userName: user ? user.name : userName,
            }
        });
    }
}