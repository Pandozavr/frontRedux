import React from 'react';
import styles from "./Header.module.css"
import {Button} from "./common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuthValue} from "../store/selectors/authSelectors";
import {NavLink} from "react-router-dom";
import {logOutThunk} from "../store/reducers/authReducer";

export const Header = () => {

    const isAuth = useSelector(getIsAuthValue);
    const dispatch = useDispatch();
    const logout = () => dispatch(logOutThunk());

    return (
        <div className={styles.header}>
            {!isAuth
                ?
                <>
                    <NavLink to="/register">
                        <Button name="Register" type="primary"/>
                    </NavLink>
                    <NavLink to="/login">
                        <Button name="Login" type="primary"/>
                    </NavLink>
                </>
                :
                <Button click={logout} name="LogOut" type="red"/>
            }


        </div>
    );
};