import React from 'react';
import style from '../counter-with-settings/CounterWithSettings.module.css';
import {Header} from "../common/Header";
import {Settings} from "./Settings/Settings";
import {NavLink} from "react-router-dom";

type PropsType = {
    counterValue: number;
    setCounterValue: (value: number) => void;
    startValue: number;
    maxValue: number;
    textError: string;
    setMaxValue: (value: number) => void;
}

export const CounterWithSettings = ({counterValue, setCounterValue, startValue, maxValue, ...props}: PropsType) => {

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1);
    }
    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1);
    }
    const resetCounterValue = () => {
        setCounterValue(0);
    }

    const errorINC = counterValue === maxValue;
    const errorDEC = counterValue === startValue;

    return (
        <div className={style.wrapper}>
            <Settings counterValue={counterValue}
                      setCounterValue={setCounterValue}
                      startValue={startValue}
                      setStartValue={setCounterValue}
                      maxValue={maxValue}
                      setMaxValue={props.setMaxValue}/>
            <div>
                <Header title={'COUNTER'}/>
                <div className={style.counterWrapper}>
                    <div className={style.counterValue}>{counterValue}</div>
                    <div>
                        {props.textError}
                        {/*{error && `enter values and press 'set'`}*/}
                    </div>
                    {/*<div>*/}
                        {/*{incorrectValue && `value is incorrect`}*/}
                    {/*</div>*/}
                    <div className={style.buttonWrapper}>
                        <button className={style.button}
                                onClick={incrementCounterValue}
                                disabled={errorINC}>INC
                        </button>
                        <button className={style.button}
                                onClick={decrementCounterValue} disabled={errorDEC}>DEC
                        </button>
                        <button className={style.buttonReset} onClick={resetCounterValue}>RESET</button>
                    </div>
                </div>
            </div>
            <div>
                <NavLink className={style.buttonReturn} to={'/'}>RETURN</NavLink>
            </div>
        </div>
    );
};
