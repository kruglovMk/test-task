import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {Post} from "./type";
import {useLoadPosts} from "../../hooks/LoadPosts";
import PostList from "../PostList/PostList";
import {observerOptions} from "../../options/observerOptions";

import styles from './posts.module.css';
import ButtonAdd from "../../ui/ButtonAdd";

const maxPage:number = 5;
const {setList, postLi} = styles

function Posts() {
    const [content, setContent] = useState<Post[]>([]);
    const { loadPosts, loading, page } = useLoadPosts(setContent);


    const handleSavePostId = (id: number, body: string) => {
        localStorage.setItem('postId', JSON.stringify({
            id: String(id),
            body
        }));
    };
    async function handleClickPost() {
           await loadPosts()
    }

    async function scrollPost() {
        if (page <= maxPage) {
            await loadPosts()
        }
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !loading) {
                scrollPost();
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const bottomElement = document.querySelector('#bottom');
        if (bottomElement) {
            observer.observe(bottomElement);
        }
        return () => {
            observer.disconnect();
        };
    }, [loading, page, scrollPost]);


    return (
        <div>
            <ul className={setList}>
                {content.map(post => (
                    <li key={post.id} className={postLi}>
                        <PostList content={post}/>
                        <ButtonAdd>
                            <Link to={`/body/${post.id}`} onClick={() => handleSavePostId(post.id, post.body)}>read on body</Link>
                        </ButtonAdd>
                    </li>
                ))}
                <div id='bottom' style={{height: '10px'}}></div>
                {page >= maxPage &&
                    <ButtonAdd>
                        <button onClick={handleClickPost}>Add Post</button>
                    </ButtonAdd>
                }
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default Posts;
