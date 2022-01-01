import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, registerThunk} from "../../../store/reducers/authReducer";
import {getError, getIsAuthValue, getIsRegValue} from "../../../store/selectors/authSelectors";
import {Button} from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import {Redirect, useLocation} from "react-router-dom";
import styles from "./LoginRegister.module.css"

export const LoginRegister = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(getIsAuthValue);
    const isReg = useSelector(getIsRegValue);
    const error = useSelector(getError);
    const location = useLocation().pathname;

    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmitLog = (data) => {
        dispatch(loginThunk(data.email, data.password))
        reset();
    };
    const onSubmitReg = (data) => {
        dispatch(registerThunk(data.email, data.password, data.user_name));
        reset();
    }

    let onSubmit;
    let btnName;

    if(location === "/login") {
        onSubmit = onSubmitLog;
        btnName = "Login";
    } if(location === "/register"){
        onSubmit = onSubmitReg;
        btnName = "Register";
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={styles.wrapperAuthForm}>
            <form className={styles.authForm}
                  onSubmit={handleSubmit(onSubmit)}
            >
                <input type="text" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}

                {location === "/register" &&
                <input type="text" placeholder="UserName" {...register("user_name", { required: true })} />
                }

                <input type="password" placeholder="Password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                <Button name={btnName} type="primary"/>
                {isReg && <p style={{color:"green"}}>Register Success. Now login</p>}
                {error && <p style={{color:"red"}}>{error}</p>}
            </form>
        </div>
    );
};