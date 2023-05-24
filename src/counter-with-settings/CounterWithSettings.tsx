import React from 'react';
import style from './CounterWithSettings.module.css';
import {Header} from "../common/Header";
import {NavLink, useNavigate} from "react-router-dom";
import {setCounterValueAC} from "../store/counter-with-settings-reducer";
import {useDispatch} from "react-redux";

type PropsType = {
    counterValue: number;
    startValue: number;
    maxValue: number;
    textError: string;
}

export const CounterWithSettings = ({counterValue, startValue, maxValue, textError}: PropsType) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const incrementCounterValue = () => {
        dispatch(setCounterValueAC(counterValue + 1));
    }
    const decrementCounterValue = () => {
        dispatch(setCounterValueAC(counterValue - 1));
    }
    const onClickSettingsHandler = () => {
        dispatch(setCounterValueAC(0));
        navigate('/settings')
    }

    const errorINC = counterValue === maxValue || counterValue < startValue;
    const errorDEC = counterValue === startValue;

    return (
        <div className={style.wrapper}>
            <div>
                <Header title={'COUNTER'}/>
                <div className={style.counterWrapper}>
                    <div className={style.counterValue}>{counterValue}</div>
                    <div>{textError}</div>
                    <div className={style.buttonWrapper}>
                        <button className={style.button}
                                onClick={incrementCounterValue}
                                disabled={errorINC}>INC
                        </button>
                        <button className={style.button}
                                onClick={decrementCounterValue} disabled={errorDEC}>DEC
                        </button>
                        <button className={style.settingsButton} onClick={onClickSettingsHandler}>SETTINGS</button>
                    </div>
                </div>
            </div>
            <div>
                <NavLink className={style.buttonReturn} to={'/'}>HOME</NavLink>
            </div>
        </div>
    );
};
