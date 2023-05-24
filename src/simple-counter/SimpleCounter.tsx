import React from 'react';
import style from './SimpleCounter.module.css';
import {NavLink} from "react-router-dom";
import {Header} from "../common/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {setCounterValueAC} from "../store/simple-counter-reducer";

export const SimpleCounter = () => {

    const counterValue = useSelector<RootStateType, number>(state => state.simpleCounterReducer.counterValue);
    const dispatch = useDispatch();

    const incrementCounterValue = () => {
        dispatch(setCounterValueAC(counterValue + 1))
    }
    const decrementCounterValue = () => {
        dispatch(setCounterValueAC(counterValue - 1))
    }
    const resetCounterValue = () => {
        dispatch(setCounterValueAC(0))
    }

    return (
        <div className={style.wrapper}>
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
            <div>
                <NavLink className={style.buttonReturn} to={'/'}>HOME</NavLink>
            </div>
        </div>
    );
};
