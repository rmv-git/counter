import React from 'react';
import style from "./Settings.module.css";
import {Header} from "../../common/Header";

export const Settings = () => {
    return (
        <div>
            <Header title={'COUNTER SETTINGS'}/>
            <div className={style.settingsWrapper}>
                <div className={style.settingsValue}>
                    <input className={style.input} placeholder={'start value'} type={'text'}/>
                    <input className={style.input} placeholder={'max value'} type={'text'}/>
                </div>
                <div className={style.buttonWrapper}>
                    <button className={style.button}
                            onClick={() => {
                            }}>SET
                    </button>
                </div>
            </div>
        </div>

    );
};
