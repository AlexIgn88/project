import {legacy_createStore as createStore} from 'redux';
import {reducer} from './reducers';

const store = createStore(reducer);

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store}; 
