import React, {useState} from 'react';
import style from './SimpleCounter.module.css';
import {NavLink} from "react-router-dom";
import {Header} from "../common/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {decrementCounterValueAC, incrementCounterValueAC, resetCounterValueAC} from "../store/simple-counter-reducer";

export const SimpleCounter = () => {

    const counterValue = useSelector<RootStateType, number>(state => state.simpleCounterReducer.counterValue);
    const dispatch = useDispatch();

    // const [counterValue, setCounterValue] = useState<number>(0);

    const incrementCounterValue = () => {
        dispatch(incrementCounterValueAC(counterValue))
        // setCounterValue(counterValue + 1);
    }
    const decrementCounterValue = () => {
        dispatch(decrementCounterValueAC(counterValue))
        // setCounterValue(counterValue - 1);
    }
    const resetCounterValue = () => {
        dispatch(resetCounterValueAC())
        // setCounterValue(0);
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
            <div style={{display: "flex", flexFlow: 'column', alignItems: 'center'}}>
                <NavLink className={style.buttonReturn} to={'/'}>RETURN</NavLink>
            </div>
        </div>
    );
};
