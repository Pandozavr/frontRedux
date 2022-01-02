import React, {useState} from 'react';
import {Button} from "../../../common/Button/Button";
import {useDispatch} from "react-redux";
import {addPostThunk} from "../../../../store/reducers/profileReducer";
import styles from "./PostForm.module.css";

export const PostForm = () => {

    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const addPost = () => {
        dispatch(addPostThunk(inputText));
        setInputText("")
    };

    return (
        <div className={styles.postForm}>
            <input type="text" value={inputText} onChange={event => setInputText(event.target.value)}/>
            <Button click={addPost} name="Send" type="primary"/>
        </div>
    );
};