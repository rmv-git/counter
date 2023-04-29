import React from 'react';
import style from './Counter.module.css';
import {Header} from "../../common/Header";
import {NavLink} from "react-router-dom";

type PropsType = {
    counterValue: number;
    setCounterValue: (value: number) => void;
    startValue: number;
    maxValue: number;
    textError: string;
    setMaxValue: (value: number) => void;
}

export const Counter = ({counterValue, setCounterValue, startValue, maxValue, textError}: PropsType) => {

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1);
    }
    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1);
    }
    const resetCounterValue = () => {
        setCounterValue(0);
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
