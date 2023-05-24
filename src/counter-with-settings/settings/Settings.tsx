import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "./Settings.module.css";
import {Header} from "../../common/Header";
import {setCounterValueAC, setMaxValueAC, setStartValueAC} from "../../store/counter-with-settings-reducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

type PropsType = {
    counterValue: number;
    startValue: number;
    maxValue: number;
}
export const Settings = ({
                             counterValue,
                             startValue,
                             maxValue,
                         }: PropsType) => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+event.currentTarget.value));
        console.log(event.currentTarget.value)
    }
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+event.currentTarget.value));
        console.log(event.currentTarget.value)
    }

    const setValue = () => {
        dispatch(setCounterValueAC(startValue));
        if (startValue) {
            navigate("/counter-with-settings");
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if (key === 'Enter') {
            dispatch(setCounterValueAC(startValue));
        }
    }

    const setDisabled = startValue === maxValue || startValue > maxValue || counterValue === startValue;

    return (
        <div className={style.wrapper}>
            <div>
                <Header title={'COUNTER SETTINGS'}/>
                <div className={style.settingsWrapper}>
                    <div className={style.settingsValue}>
                        <div>
                            <input className={style.input}
                                   placeholder={'start value'}
                                   type={'text'}
                                   value={startValue}
                                   onChange={onChangeStartValue}
                                   onKeyDown={onKeyPressHandler}
                            />
                        </div>
                        <div>
                            <input className={style.input}
                                   placeholder={'max value'}
                                   type={'text'}
                                   value={maxValue}
                                   onChange={onChangeMaxValue}
                            />
                        </div>
                    </div>
                    <div className={style.buttonWrapper}>
                        <button className={style.button}
                                onClick={setValue}
                                disabled={setDisabled}>SET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
