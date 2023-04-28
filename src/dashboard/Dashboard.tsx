import React from 'react';
import {Header} from "../common/Header";
import {CounterWithSettings} from "../counter-with-settings/CounterWithSettings";
import {SimpleCounter} from "../simple-counter/SimpleCounter";
import style from "./Dashbord.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    counterValue: number;
    setCounterValue: (value: number) => void;
    startValue: number;
    maxValue: number;
    textError: string;
}

export const Dashboard = ({...props}: PropsType) => {

    return (
        <div>
            <Header title={'Select counter'}/>
            <div className={style.counterWrapper}>
                <NavLink className={style.counterValue} to={'/counter-with-settings'}>COUNTER WITH SETTINGS</NavLink>
                <NavLink className={style.counterValue} to={'/simple-counter'}>SIMPLE COUNTER</NavLink>
            </div>
        </div>
    );
};
