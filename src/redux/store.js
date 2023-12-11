import {legacy_createStore as createStore } from 'redux'
import counterReducer from "./../redux/counter/counterReducer";

const store = createStore(counterReducer);

export default store;