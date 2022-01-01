import React from 'react';
import preloader from "../../../assets/images/DoubleRing.svg";
import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={preloader}/>
        </div>
    );
};