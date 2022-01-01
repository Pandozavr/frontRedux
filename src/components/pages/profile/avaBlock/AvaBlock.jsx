import React from 'react';
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
    const getProfileData = () => dispatch(getProfileThunk());

    return (
        <div>
            <button onClick={getProfileData}>profile</button>
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