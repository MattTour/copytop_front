import CreatePost from '../post/createPost';
import PostsWall from '../post/postsWall';
import SearchZone from '../search/searchZone';
import React, {useState} from 'react';

const HomeBody = () => {
    const [createPost, setCreatePost] = useState(false);

    function showPopup(state) {
        setCreatePost(state);
    }

    return (
        <div>
            {createPost && <CreatePost showPopup={showPopup}/>}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <PostsWall showPopup={showPopup} />
                    </div>
                    <div className="col">
                        <SearchZone />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBody;
