import ActionTypes from '../common';
import { v4 as uuidv4 } from 'uuid';
import { selectUsers } from '../selectors';

const {ADD_REVIEW} = ActionTypes;

export default store => next => action => {
    const addReviewAction = action.type === ADD_REVIEW;
    if (!addReviewAction) {
        next(action)
      } else {
        const { payload, ...restAction } = action;
        const { userId, userName, ...restPayload } = payload;
        
        if (!userId) {
            next(restAction);
        } else {
            const user = selectUsers(store.getState())[userId]
            console.log('user',user);
            
            next({
                ...restAction,
                payload: {
                    ...restPayload,
                    // userId: Date.now() + '-user',
                    // userId: user ? user.id : Date.now() + '-user',
                    userId: user ? user.id : uuidv4(),
                    userName: user ? user.name : userName,
                }
            });
        }
       }
}