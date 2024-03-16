import {PostListProps} from "./types";





function PostList({ content }: PostListProps) {
    const { id, userId, title } = content;

    return (
        <>
            <div>{id}</div>
            <span>{userId}</span>
            <h3>{title}</h3>
        </>
    );
}

export default PostList;