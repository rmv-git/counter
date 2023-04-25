import style from "./Header.module.css";
import React from "react";

type PropsType = {
    title: string;
}

export const Header = ({title}: PropsType) => {
    return (
        <div className={style.header}>{title}</div>
    );
};
