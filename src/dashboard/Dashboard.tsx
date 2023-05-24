import React from 'react';
import {Header} from "../common/Header";
import style from "./Dashbord.module.css";
import {NavLink} from "react-router-dom";


export const Dashboard = () => {
    return (
        <div>
            <Header title={'SELECT COUNTER'}/>
            <div className={style.counterWrapper}>
                <NavLink className={style.counterValue} to={'/counter-with-settings'}>COUNTER WITH SETTINGS</NavLink>
                <NavLink className={style.counterValue} to={'/simple-counter'}>SIMPLE COUNTER</NavLink>
            </div>
        </div>
    );
};
