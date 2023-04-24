import { useEffect, useState } from 'react';
import Post from './post';
import { GetPosts } from '../services/ThreePics';

function PostList({ searchBy, setPosts, posts }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        GetPosts(searchBy).then((posts) => {
            setPosts(posts);
            setLoading(false);
        });

    }, [searchBy]);

    if (loading) {
        return (
            <div className='container p-4'>
                <p>Loading...</p>
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
        );
    } else {
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
}

export default PostList;