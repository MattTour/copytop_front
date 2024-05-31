import PostsWall from '../post/postsWall';
import SearchZone from '../search/searchZone';

const HomeBody = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <PostsWall />
                </div>
                <div className="col">
                    <SearchZone />
                </div>
            </div>
        </div>
    )
}

export default HomeBody;
