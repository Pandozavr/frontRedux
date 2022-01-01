import React from 'react';
import styles from "./PostItem.module.css"
import {Button} from "../../../common/Button/Button";

export const PostItem = (props) => {



    return (
        <div className={styles.postItem}>
            <div>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/788.jpg" alt="avatar"/>
            </div>
            <div>
                <p>{props.postText}</p>
                <Button name="Edit" type="primary"/>
                <Button name="Delete" type="red"/>
            </div>
        </div>
    );
};