import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProfileThunk} from "../../../../store/reducers/profileReducer";
import {getAvatar, getUserName} from "../../../../store/selectors/profileSelectors";
import {getPreloadValue} from "../../../../store/selectors/authSelectors";
import {Loader} from "../../../common/Loader/Loader";

export const AvaBlock = () => {

    const dispatch = useDispatch();
    const userName = useSelector(getUserName);
    const avatar = useSelector(getAvatar);
    const preload = useSelector(getPreloadValue);

    useEffect(()=>{
        dispatch(getProfileThunk())
    },[])

    return (
        <div>
            {preload
                ? <Loader/>
                :
                <>
                    <p>Hello {userName}</p>
                    <img src={avatar}/>
                </>
            }
        </div>
    );
};