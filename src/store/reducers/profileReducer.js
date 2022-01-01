import {profileAPI} from "../../API/API";
import {setPreloadAction} from "./authReducer";

const SET_MESSAGE = "SET_MESSAGE";
const DEL_MESSAGE = "DEL_MESSAGE";
const SET_PROFILE = "SET_PROFILE";

const initialState = {
    userName: "",
    avatarUrl: "",
    posts: []
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {...state, userName: action.payload.userName, avatarUrl: action.payload.avaUrl}
        }
        case SET_MESSAGE: {
            return {...state, posts: [...state.posts, {id: Date.now() ,postText: action.payload}]}
        }
        default:
            return state;
    }
};

export const setProfileData = (payload) => {
    return {
        type: SET_PROFILE,
        payload
    }
}

export const setMessageAction = (payload) => {
    return {
        type: SET_MESSAGE,
        payload
    }
};
export const delMessageAction = (payload) => {
    return {
        type: DEL_MESSAGE,
        payload
    }
};

////////////////////////////////THUNK

export const getProfileThunk = () => async (dispatch) => {
    let res = await profileAPI.getProfileData();
    dispatch(setPreloadAction(true));
    dispatch(setProfileData(res.data));
    dispatch(setPreloadAction(false))
};