import * as axios from "axios"
import React from "react";
import {Redirect} from "react-router-dom";

export const API_URL = `http://localhost:3001/api`;
export const FILE_URL = `http://localhost:3001/`;

/*export const API_URL = `http://62.113.99.202:3001/api`;
export const FILE_URL = `http://62.113.99.202:3001/`;*/

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true, //автоматическая подцепка куки к запросу
    responseType: "json",
    headers: {
        "content-type": "application/json",
        "Accept": "application/json"
    }
});

//цепляем к запросу аксесс токен

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
});


// в случае получение в ответе 401 перехыватываем ответ и кидаем запрос на обновление пары токенов по рефреш токену, если его нету или он умер - редайрект
// если ок, то сохраняем новый аксесс токен запихиваем его в локал сторедж и уже с новым акссес токеном повторно кидаем исходный запрос
instance.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status == 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true});
            localStorage.setItem('token', response.data.accessToken);
            return instance.request(originalRequest)
        } catch (e) {
            return <Redirect to={"/login"}/>
        }
    }
    throw error;
});

export const authAPI = {
    register(email, password, user_name) {
        return instance.post(`register`, {email, password, user_name});
    },
    login(email, password) {
        return instance.post(`login`, {email, password});
    },
    logout() {
        return instance.post(`logout`);
    }
};

export const profileAPI = {
    uploadAvatar(profileImg) {
        const formData = new FormData();
        formData.append("profileImg", profileImg);
        return instance.post(`avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    async sendPost(textPost) {
        const {data} = await instance.post(`post`, {textPost});
        return data;
    },
    getProfileData() {
        return instance.get(`profile`);
    },
    async getPosts() {
        const {data} = await instance.get(`userposts`);
        return data;
    },
    async deletePost(postID) {
        const data = await instance.delete(`post?postId=${postID}`);
        return data;
    },
    async updatePost(postID, postText) {
        const data = await instance.put(`post?postId=${postID}`, {postText});
        return data;
    }
};

export const userAPI = {
    getUsers() {
        return instance.get(`users`);
    },
    follow(friendId) {
        return instance.get(`follow?friendId=${friendId}`)
    },
    unfollow(friendId) {
        return instance.get(`unfollow?friendId=${friendId}`)
    }
};

export const musicAPI = {
    getMusic() {
        return instance.get(`music`);
    }
};