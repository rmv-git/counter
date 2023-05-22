import React, {useEffect, useState} from 'react';
import './App.css';
import {Dashboard} from "./dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import {SimpleCounter} from "./simple-counter/SimpleCounter";
import {CounterWithSettings} from "./counter-with-settings/CounterWithSettings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {initialStateType, setErrorAC, setMaxValueAC, setStartValueAC} from "./store/counter-with-settings-reducer";

export const App = () => {

   /* const [counterValue, setCounterValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [textError, setTextError] = useState<string>('');
*/
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
                <Route path="counter-with-settings" element={
                    <CounterWithSettings counterValue={values.counterValue}
                                         // setCounterValue={setCounterValue}
                                         startValue={values.startValue}
                                         maxValue={values.maxValue}
                                         textError={values.textError}
                                         // setMaxValue={setMaxValue}
                                         // setStartValue={setStartValue}
                    />}>
                </Route>
            </Routes>
        </div>
    );
}
