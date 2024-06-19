import { useState, useEffect } from 'react';
import '../../style/post.css';
import Post from './post';
import PrimaryButton from '../button/primaryButton';

const PostsWall = ({showPopup}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/post/search')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts(data);
            });
    }, []);

    function showPopupInParent() {
        showPopup(true);
    }

    return (
        <div className="posts-list">
            <div className="row mb-3">
                <PrimaryButton label="Créer nouveau post" actionOnClick={showPopupInParent}/>
            </div>
            {posts.length > 0 ?
                posts.map((post, index) => (
                    <div key={index} className="row mb-3">
                        <Post post={post}/>
                    </div>
                ))
                :(
                    <div className="row">
                        Pas de posts
                    </div>
                )
            }
        </div>
    )
}

export default PostsWall;
