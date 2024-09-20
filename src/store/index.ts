import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import { logging } from './middlewares/logging';

;

const enhancer = applyMiddleware(
    logging
)

const store = createStore(reducer, {}, enhancer)

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store}; 
