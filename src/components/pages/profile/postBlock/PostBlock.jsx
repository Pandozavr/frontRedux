import React from 'react';
import {PostForm} from "./PostForm";
import {PostItem} from "./PostItem";
import styles from "./PostBlock.module.css"
import {useSelector} from "react-redux";
import {getPosts} from "../../../../store/selectors/profileSelectors";

export const PostBlock = () => {

    const posts = useSelector(getPosts);

    return (
        <div className={styles.pbWrapper}>
            <PostForm/>
            {posts.map(post => <PostItem key={post.id} postText={post.postText}/>)}
        </div>
    );
};