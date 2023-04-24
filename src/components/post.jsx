import { useState } from 'react';
import likeImg from '../assets/default/like.png';
import { LikePost } from '../services/ThreePics';

function Post({ createdAt, autor, text, comments, image, postLikes, postId, setLogin }) {

    const [likes, setLikes] = useState(postLikes);

    const likeAPost = () => {
        LikePost(postId).then((res) => {
            setLikes(likes+1);
        }).catch((err) => {
            if (err.response.status === 401) {
                setLogin(false);
            } else {
                console.log(err);
            }
        });
    };

    return (
        <div className="card mb-3">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='row'>
                    <div className='col-6'>
                        <p className="card-text" style={{ textAlign: 'left' }}><small className="text-body-secondary">{createdAt}</small></p>
                    </div>
                    <div className='col-6' style={{ textAlign: 'right' }}>
                        <button type="button" className="btn btn-danger" onClick={() => likeAPost()}>
                            <img src={likeImg} alt="" style={{ width: 20, }} />
                            <span> {likes}</span>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <small className="card-title" style={{ textAlign: 'left' }}>@{autor}</small>
                </div>
                <p className="card-text" style={{ textAlign: 'left' }}>{text}</p>
                <div className='col-6'>
                    <p className="card-text" style={{ textAlign: 'left' }}><span><small className="text-body-secondary">{comments.length} comments</small></span></p>
                </div>
            </div>
        </div>
    )
}

export default Post;