import {combineReducers, createStore} from "redux";
import {simpleCounterReducer} from "./simple-counter-reducer";

const rootReducer = combineReducers({
    simpleCounterReducer,
});

export const reduxStore = createStore(rootReducer);

export type RootStateType = ReturnType<typeof reduxStore.getState>

export type AppDispatch = typeof reduxStore.dispatch;

//@ts-ignore
window.store = reduxStore;
