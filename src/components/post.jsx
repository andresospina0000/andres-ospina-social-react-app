import fakePost from '../assets/postsPics/fakePost.png';
import likeImg from '../assets/default/like.png';

function Post({ createdAt, autor, text, comments, image }) {
    return (
        <div className="card mb-3">
            <img src={fakePost} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='row'>
                    <div className='col-6'>
                        <p className="card-text" style={{ textAlign: 'left' }}><small className="text-body-secondary">{createdAt}</small></p>
                    </div>
                    <div className='col-6' style={{ textAlign: 'right' }}>
                        <button type="button" className="btn btn-danger">
                            <img src={likeImg} alt="" style={{ width: 20, }} />
                            <span> 4k</span>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <small className="card-title" style={{ textAlign: 'left' }}>{autor}</small>
                </div>
                <p className="card-text" style={{ textAlign: 'left' }}>{text}</p>
                <div className='col-6'>
                    <p className="card-text" style={{ textAlign: 'left' }}><span><small className="text-body-secondary">{comments} comments</small></span></p>
                </div>
            </div>
        </div>
    )
}

export default Post;