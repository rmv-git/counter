import React from 'react';
import style from '../counter-with-settings/CounterWithSettings.module.css';
import {Settings} from "./settings/Settings";
import {Counter} from "./counter/Counter";

type PropsType = {
    counterValue: number;
    startValue: number;
    maxValue: number;
    textError: string;
}

export const CounterWithSettings = ({
                                        counterValue,
                                        startValue,
                                        maxValue,
                                        textError
                                    }: PropsType) => {
    return (
        <div className={style.wrapper}>
            {/*<Settings counterValue={counterValue}*/}
            {/*          startValue={startValue}*/}
            {/*          maxValue={maxValue}/>*/}
            <Counter counterValue={counterValue}
                     startValue={startValue}
                     maxValue={maxValue}
                     textError={textError}/>
        </div>
    );
};
