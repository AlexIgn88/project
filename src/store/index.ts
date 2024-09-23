import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import { logging } from './middlewares/logging';
import generateReviewId from './middlewares/generate-review-id';
import generateUserId from './middlewares/generate-user-id';

const enhancer = applyMiddleware(
    generateReviewId,
    generateUserId,
    logging
)

const store = createStore(reducer, {}, enhancer)

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store}; 
