import Post from './post';

function PostList() {
    return (
        <div className='container p-4'>
            {/* {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))} */}
            <Post></Post>
        </div>
    );
}

export default PostList;