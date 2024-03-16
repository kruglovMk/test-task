import {PostListProps} from "./types";
import BodyPost from "../bodyPost/BodyPost";




function PostList({ content }: PostListProps) {
    const { id, userId, title } = content;
    const postId = localStorage.getItem('postId');

    return (
        <>
            <div>{id}</div>
            <span>{userId}</span>
            <h3>{title}</h3>
            {postId && <BodyPost/>}
        </>
    );
}

export default PostList;