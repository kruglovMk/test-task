import {Link} from "react-router-dom";

import style from "./bodyPost.module.css"
import ButtonOut from "../../ui/ButtonOut";


const {text, textContainer} = style
function BodyPost() {
    const postId = localStorage.getItem('postId');
    let localParse: { id: string, body: string } | null = null;
    if (postId) {
        localParse = JSON.parse(postId);
    }
    function clearIdPost() {
        localStorage.removeItem('postId');
    }

    return (
        <div className={textContainer}>
            <span>{localParse?.id}</span>
            <p className={text}>{localParse?.body}</p>
            <ButtonOut>
                <Link to={'/'} onClick={clearIdPost}>Back ad</Link>
            </ButtonOut>
        </div>
    );
}

export default BodyPost;