import { useEffect, useState } from 'react';
import Post from './post';
import { GetPosts } from '../services/ThreePics';

function PostList({ searchBy, setPosts, posts, setLogin }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        GetPosts(searchBy).then((posts) => {
            setPosts(posts);
            setLoading(false);
        }).catch((err) => {
            if (err.response.status === 401) {
                setLogin(false);
            }else{
                console.log(err);
            }
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
                {
                    posts.map(({ text, author, image, createdAt, comments, likes, id }, index) => (
                        <Post key={id} createdAt={createdAt}
                            autor={author.username} text={text} comments={comments}
                            image={image} postLikes={likes} />
                    ))
                }
            </div>
        );
    }
}

export default PostList;