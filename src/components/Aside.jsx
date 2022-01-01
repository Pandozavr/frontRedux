import React from 'react';
import styles from "./Aside.module.css"
import {NavLink} from "react-router-dom";

export const Aside = () => {
    return (
        <div className={styles.aside}>
            <div>
                <NavLink a="true" to='/profile'>My Profile</NavLink>
            </div>
            <div>
                <NavLink a="true" to='/users'>Users</NavLink>
            </div>
            <div>
                <NavLink a="true" to='/chat'>Chat</NavLink>
            </div>
            <div>
                <NavLink a="true" to='/music'>Music</NavLink>
            </div>
        </div>
    );
};