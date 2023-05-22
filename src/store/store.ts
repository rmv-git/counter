import {combineReducers, createStore} from "redux";
import {simpleCounterReducer} from "./simple-counter-reducer";
import {counterWithSettingsReducer} from "./counter-with-settings-reducer";

const rootReducer = combineReducers({
    simpleCounterReducer,
    counterWithSettingsReducer,
});

export const reduxStore = createStore(rootReducer);

export type RootStateType = ReturnType<typeof reduxStore.getState>

export type AppDispatch = typeof reduxStore.dispatch;

//@ts-ignore
window.store = reduxStore;
