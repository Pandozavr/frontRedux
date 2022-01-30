import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProfileThunk, updAvatarThunk} from "../../../../store/reducers/profileReducer";
import {getAvatar, getUserName} from "../../../../store/selectors/profileSelectors";
import {getPreloadValue} from "../../../../store/selectors/authSelectors";
import {Loader} from "../../../common/Loader/Loader";
import style from "./AvaBlock.module.css"

export const AvaBlock = () => {

    const dispatch = useDispatch();
    const userName = useSelector(getUserName);
    const avatar = useSelector(getAvatar);
    const preload = useSelector(getPreloadValue);

    useEffect(() => {
        dispatch(getProfileThunk())
    }, [])

    const getFile = (e) => {
        if(e.target.files.length){
            dispatch(updAvatarThunk(e.target.files[0]))
        }

    }

    return (
        <div>
            {preload
                ? <Loader/>
                :
                <>
                    <p>Hello {userName}</p>
                    <img style={{width: '200px', display: 'block'}} src={avatar}/>
                    <div className={style.upload}>
                        <label> Сменить аватарку
                            <input onChange={getFile} style={{display:'none'}} name="file" type="file"/>
                        </label>
                    </div>
                </>
            }
        </div>
    );
};