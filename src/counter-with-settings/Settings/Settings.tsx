import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from "./Settings.module.css";
import {Header} from "../../common/Header";

type PropsType = {
    counterValue: number;
    setCounterValue: (counterValue: number) => void;
    startValue: number;
    setStartValue: (startValue: number) => void;
    maxValue: number;
    setMaxValue: (maxValue: number) => void;
}
export const Settings = ({
                             counterValue,
                             setCounterValue,
                             startValue,
                             setStartValue,
                             maxValue,
                             setMaxValue
                         }: PropsType) => {


    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value);
    }
    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value);
    }

    const setValue = () => {
        setCounterValue(startValue);
        setMaxValue(maxValue);
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if (key === 'Enter') {
            setCounterValue(startValue);
            setMaxValue(maxValue);
        }
    }

    return (
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
                               onKeyDown={onKeyPressHandler}/>
                    </div>
                </div>
                <div className={style.buttonWrapper}>
                    <button className={style.button}
                            onClick={setValue}>SET
                    </button>
                </div>
            </div>
        </div>
    );
};
