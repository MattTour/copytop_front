const Post = ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{post.postTitle}</h1>
                <p className="card-text">{post.postContent}</p>
            </div>
        </div>
    )
}

export default Post;
