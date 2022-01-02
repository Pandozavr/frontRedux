import React, {useState} from 'react';
import styles from "./PostItem.module.css"
import {Button} from "../../../common/Button/Button";
import {useDispatch} from "react-redux";
import {delPostThunk, updPostThunk} from "../../../../store/reducers/profileReducer";

export const PostItem = (props) => {

    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [inputVal, setInputVal] = useState(props.postText);
    const switchMode = () => setEditMode(!editMode);
    const delPost = () => dispatch(delPostThunk(props.id));
    const updPost = () => {
        dispatch(updPostThunk(props.id, inputVal));
        switchMode();
    };


    return (
        <div className={styles.postItem}>
            <div>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div style={{width: "800px"}}>
                {!editMode ?
                    <p>{props.postText}</p>
                    :
                    <input style={{width: "100%"}} onChange={event => setInputVal(event.target.value)} value={inputVal}/>
                }
            </div>
            <div>
                {!editMode ?
                    <>
                        <Button click={switchMode} name="Edit" type="primary"/>
                        <Button click={delPost} name="Delete" type="red"/>
                    </>
                    :
                    <>
                        <Button click={updPost} name="Confirm" type="primary"/>
                        <Button click={switchMode} name="Cancel" type="red"/>
                    </>
                }

            </div>
        </div>
    );
};