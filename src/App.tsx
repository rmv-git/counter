import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterWithSettings} from "./counter-with-settings/CounterWithSettings";
import {Settings} from "./counter-with-settings/Settings/Settings";

export const App = () => {

    const [counterValue, setCounterValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

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

    return (
        <div className="App">
            <Settings counterValue={counterValue}
                      setCounterValue={setCounterValue}
                      startValue={startValue}
                      setStartValue={setStartValue}
                      maxValue={maxValue}
                      setMaxValue={setMaxValue}/>
            <CounterWithSettings counterValue={counterValue}
                                 setCounterValue={setCounterValue}
                                 startValue={startValue}
                                 maxValue={maxValue}/>
        </div>
    );
}
