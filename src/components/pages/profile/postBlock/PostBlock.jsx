import React, {useEffect} from 'react';
import {PostForm} from "./PostForm";
import {PostItem} from "./PostItem";
import styles from "./PostBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunk} from "../../../../store/reducers/profileReducer";
import {getAvatar, getPosts} from "../../../../store/selectors/profileSelectors";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./Transition.css"

export const PostBlock = () => {

    const dispatch = useDispatch();
    const posts = useSelector(getPosts);
    const avatar = useSelector(getAvatar);

    const postsSort = posts.sort(function(a, b) {
        return b.post_id - a.post_id;
    });

    useEffect(()=>{
        dispatch(getPostsThunk())
    },[]);

    return (
        <div className={styles.pbWrapper}>
            <PostForm/>
            <TransitionGroup>
            {postsSort.map(post =>
                <CSSTransition
                    key={post.post_id}
                    timeout={500}
                    classNames="post"
                >
                <PostItem id={post.post_id} avatar={avatar} postText={post.post_text}/>
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};