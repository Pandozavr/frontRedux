import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import {useSelector} from "react-redux";
import {getIsAuthValue} from "../store/selectors/authSelectors";


export const AppRouter = () => {

    const isAuth = useSelector(getIsAuthValue);

    return (
        <Switch>
            <Redirect exact from="/" to="/profile"/>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exect/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exect/>
            )}
            <Redirect to="/login"/>
        </Switch>
    );
};