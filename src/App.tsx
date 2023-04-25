import React from 'react';
import './App.css';
import {SimpleCounter} from "./simple-counter/SimpleCounter";
import {CounterWithSettings} from "./counter-with-settings/CounterWithSettings";
import {Settings} from "./counter-with-settings/Settings/Settings";

export const App = () => {
    return (
        <div className="App">
            <Settings/>
            <CounterWithSettings/>
        </div>
    );
}
