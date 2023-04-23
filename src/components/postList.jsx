import { useEffect } from 'react';
import Post from './post';
import getPosts from '../services/ThreePics';

function PostList({ searchBy, setPosts, posts }) {

    console.log('posts', posts);

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts)
        });
    }, [searchBy]);

    return (
        <div className='container p-4'>
            {posts.map((post) => (
                <Post key={post.id} createdAt={post.createdAt}
                    autor={post.autor} text={post.text} comments={post.comments}
                    image={post.image} />
            ))}
        </div>
    );
}

export default PostList;