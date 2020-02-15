import { createStore } from 'redux';
import reminders from './reducers';

const store = createStore(reminders, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;