import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Aside} from "./components/Aside";
import {Content} from "./components/Content";
import styles from "./App.module.css";
import {useDispatch} from "react-redux";
import "./components/common/Input/Input.css";
import axios from "axios";
import {API_URL} from "./API/API";
import {setAuthAction} from "./store/reducers/authReducer";
import {Loader} from "./components/common/Loader/Loader";

function App() {

    const [preloadValue, setPreloadValue] = useState(false);
    const dispatch = useDispatch();

    const checkAuth = async () => {
        const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
        localStorage.setItem('token', response.data.accessToken);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setPreloadValue(true);
            checkAuth().then(data => {
                dispatch(setAuthAction(true));
                setPreloadValue(false)
            }).catch(e => {
                console.log("not authorized "+ e)}).finally(() => setPreloadValue(false))
        }
    }, []);

    return (
                <div className={styles.appWrapper}>
                    <Header/>
                    <Aside/>
                    {!preloadValue ? <Content/> : <Loader/>}
                </div>
    );
}

export default App;
