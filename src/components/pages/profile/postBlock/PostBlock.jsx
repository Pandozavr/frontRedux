import React, {useEffect} from 'react';
import {PostForm} from "./PostForm";
import {PostItem} from "./PostItem";
import styles from "./PostBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunk} from "../../../../store/reducers/profileReducer";
import {getAvatar, getPosts} from "../../../../store/selectors/profileSelectors";

export const PostBlock = () => {

    const dispatch = useDispatch();
    const posts = useSelector(getPosts);
    const avatar = useSelector(getAvatar);

    useEffect(()=>{
        dispatch(getPostsThunk())
    },[]);

    return (
        <div className={styles.pbWrapper}>
            <PostForm/>
            {posts.map(post => <PostItem key={post.post_id} id={post.post_id} avatar={avatar} postText={post.post_text}/>)}
        </div>
    );
};