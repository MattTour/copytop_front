import { useState, useEffect } from 'react';
import '../../style/post.css';
import Post from './post';

const PostsWall = () => {
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5001/post/last-posts')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setEvents(data);
    //         });
    // }, []);
    return (
        <div className="posts-list">
            <div className="row">
                <Post />
            </div>
        </div>
    )
}

export default PostsWall;
