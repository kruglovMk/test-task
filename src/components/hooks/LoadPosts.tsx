import React, { useState } from "react";

import { Post } from "../pages/posts/type";
import { Fetch } from "../fetch/fetch";

const fetchRequest = new Fetch();
const url = 'https://jsonplaceholder.typicode.com/posts';

export const useLoadPosts = (
    setContent: React.Dispatch<React.SetStateAction<Post[]>>,
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [checkResponse, setCheckResponse] = useState<boolean>(false);

    const loadPosts = async () => {
        setLoading(true);
        if (checkResponse) {
            setLoading(false);
            return;
        }
        const newPost:Post[] = await fetchRequest.fetchData(`${url}?_page=${page}&_limit=10`);
        if (Array.isArray(newPost) && newPost.length > 0) {
            setContent(prevContent => [...prevContent, ...newPost]);
            setPage(prevPage => prevPage + 1);
        } else {
            setCheckResponse(true);
        }
        setLoading(false);
    };

    return { loadPosts, loading, page };
};