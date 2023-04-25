import React from 'react';
import style from '../counter-with-settings/CounterWithSettings.module.css';
import {Header} from "../common/Header";

type PropsType = {
    counterValue: number;
    setCounterValue: (value: number) => void;
    startValue: number;
    maxValue: number;
}

export const CounterWithSettings = ({counterValue, setCounterValue, startValue, maxValue}: PropsType) => {

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1);
    }
    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1);
    }
    const resetCounterValue = () => {
        setCounterValue(0);
    }
    return (
        <div>
            <Header title={'COUNTER'}/>
            <div className={style.counterWrapper}>
                <div className={style.counterValue}>{counterValue}</div>
                <div className={style.buttonWrapper}>
                    <button className={style.button}
                            onClick={incrementCounterValue}>INC
                    </button>
                    <button className={style.button}
                            onClick={decrementCounterValue}>DEC
                    </button>
                    <button className={style.buttonReset} onClick={resetCounterValue}>RESET</button>
                </div>
            </div>
        </div>
    );
};
