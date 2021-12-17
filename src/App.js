import React from 'react'
import {Header} from "./components/Header";
import {Aside} from "./components/Aside";
import {Content} from "./components/Content";
import styles from "./App.module.css"
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header/>
                <Aside/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;
