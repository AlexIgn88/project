import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { logging } from './middlewares/logging';
import generateReviewId from './middlewares/generate-review-id';
import generateUserId from './middlewares/generate-user-id';
import api from './middlewares/api';
import { thunk } from 'redux-thunk';

const enhancer = applyMiddleware(
    thunk,
    api,
    generateReviewId,
    generateUserId,
    logging
)

const store = createStore(reducer, {}, enhancer)

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
export { store }; 
