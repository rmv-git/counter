import React, {useEffect} from 'react';
import './App.css';
import {Dashboard} from "./dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import {SimpleCounter} from "./simple-counter/SimpleCounter";
import {CounterWithSettings} from "./counter-with-settings/CounterWithSettings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {initialStateType, setErrorAC, setMaxValueAC, setStartValueAC} from "./store/counter-with-settings-reducer";
import {Settings} from "./counter-with-settings/settings/Settings";

export const App = () => {
    const values = useSelector<RootStateType, initialStateType>(state => state.counterWithSettingsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageAsString = localStorage.getItem('startValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            dispatch(setStartValueAC(localStorageAsNumber));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(values.startValue));
    }, [values.startValue]);

    useEffect(() => {
        const localStorageAsString = localStorage.getItem('maxValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            dispatch(setMaxValueAC(localStorageAsNumber));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(values.maxValue));
    }, [values.maxValue]);

    useEffect(() => {
        if (values.startValue === values.maxValue) {
            dispatch(setErrorAC(`enter values and press 'set'`));
        }
        if (values.startValue > values.maxValue) {
            dispatch(setErrorAC('value is incorrect'));
        }
        if (values.startValue === values.counterValue) {
            dispatch(setErrorAC(''));
        }
    }, [dispatch, values.startValue, values.maxValue, values.counterValue]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <Dashboard/>}/>
                <Route
                    path="simple-counter"
                    element={<SimpleCounter/>}
                >
                </Route>
                <Route path={"settings"} element={
                    <Settings counterValue={values.counterValue}
                              startValue={values.startValue}
                              maxValue={values.maxValue}/>
                }>
                </Route>
                <Route path="counter-with-settings" element={
                    <CounterWithSettings counterValue={values.counterValue}
                                         startValue={values.startValue}
                                         maxValue={values.maxValue}
                                         textError={values.textError}/>
                }>
                </Route>
            </Routes>
        </div>
    );
}
