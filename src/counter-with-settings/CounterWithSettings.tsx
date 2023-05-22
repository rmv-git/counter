import React from 'react';
import style from '../counter-with-settings/CounterWithSettings.module.css';
import {Settings} from "./settings/Settings";
import {Counter} from "./counter/Counter";

type PropsType = {
    counterValue: number;
    // setCounterValue: (value: number) => void;
    startValue: number;
    // setStartValue: (value: number) => void;
    maxValue: number;
    textError: string;
    // setMaxValue: (value: number) => void;
}

export const CounterWithSettings = ({
                                        counterValue,
                                        // setCounterValue,
                                        startValue,
                                        // setStartValue,
                                        maxValue,
                                        // setMaxValue,
                                        textError
                                    }: PropsType) => {
    return (
        <div className={style.wrapper}>
            <Settings counterValue={counterValue}
                      // setCounterValue={setCounterValue}
                      startValue={startValue}
                      // setStartValue={setStartValue}
                      maxValue={maxValue}
                      // setMaxValue={setMaxValue}
            />
            <Counter counterValue={counterValue}
                     // setCounterValue={setCounterValue}
                     startValue={startValue}
                     maxValue={maxValue}
                     textError={textError}
                     // setMaxValue={setMaxValue}
            />
        </div>
    );
};
