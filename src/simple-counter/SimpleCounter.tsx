import React, {useState} from 'react';
import style from './SimpleCounter.module.css';

export const SimpleCounter = () => {

    const [counterValue, setCounterValue] = useState<number>(0);

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
        <div className={style.counterWrapper}>
            <div className={style.header}>COUNTER</div>
            <div>
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
