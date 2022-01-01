import React from 'react';
import {AvaBlock} from "./avaBlock/AvaBlock";
import {PostBlock} from "./postBlock/PostBlock";
import styles from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={styles.profileWrapper}>
            <AvaBlock/>
            <PostBlock/>
        </div>
    );
};