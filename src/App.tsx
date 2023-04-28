import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterWithSettings} from "./counter-with-settings/CounterWithSettings";
import {Settings} from "./counter-with-settings/Settings/Settings";
import {Dashboard} from "./dashboard/Dashboard";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {SimpleCounter} from "./simple-counter/SimpleCounter";

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [textError, setTextError] = useState<string>('');


    useEffect(() => {
        const localStorageAsString = localStorage.getItem('startValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            setStartValue(localStorageAsNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue]);

    useEffect(() => {
        const localStorageAsString = localStorage.getItem('maxValue');
        if (localStorageAsString) {
            const localStorageAsNumber = JSON.parse(localStorageAsString);
            setMaxValue(localStorageAsNumber);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue]);

    useEffect(() => {
        if (startValue === maxValue) {
            setTextError(`enter values and press 'set'`);
        }
        if (startValue > maxValue) {
            setTextError('value is incorrect');
        }
        if (startValue === counterValue) {
            setTextError('');
        }
    }, [startValue, maxValue, counterValue]);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <Dashboard counterValue={counterValue}
                               setCounterValue={setCounterValue}
                               startValue={startValue}
                               maxValue={maxValue}
                               textError={textError}/>}>
                </Route>
                    <Route
                        path="simple-counter"
                        element={<SimpleCounter/>}
                    >
                    </Route>
                    <Route path="counter-with-settings" element={
                        <CounterWithSettings counterValue={counterValue}
                                             setCounterValue={setCounterValue}
                                             startValue={startValue}
                                             maxValue={maxValue}
                                             textError={textError}
                                             setMaxValue={setMaxValue}
                        />}>
                        </Route>
            </Routes>
        </div>
    );
}
