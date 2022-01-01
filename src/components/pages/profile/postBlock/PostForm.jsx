import React, {useState} from 'react';
import {Button} from "../../../common/Button/Button";
import {useDispatch} from "react-redux";
import {setMessageAction} from "../../../../store/reducers/profileReducer";

export const PostForm = () => {

    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const addPost = () => {
        dispatch(setMessageAction(inputText));
        setInputText("")
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={event => setInputText(event.target.value)}/>
            <Button click={addPost} name="Send" type="primary"/>
        </div>
    );
};