import React from 'react';
import styles from "./Header.module.css"
import {Button} from "./common/Button/Button";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Button name="Register" type="primary"/>
            <Button name="Login" type="primary"/>
            <Button name="LogOut" type="red"/>
        </div>
    );
};