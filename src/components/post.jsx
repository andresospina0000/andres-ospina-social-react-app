import fakePost from '../assets/default/fakePost.png';
import likeImg from '../assets/default/like.png';

function Post() {
    return (
        <div className="card">            
            <img src={fakePost} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='row'>
                    <div className='col-6'>
                        <p class="card-text" style={{textAlign: 'left'}}><small class="text-body-secondary">3min ago</small></p>
                    </div>
                    <div className='col-6' style={{textAlign: 'right'}}>
                        <button type="button" class="btn btn-danger">
                            <img src={likeImg} alt="" style={{ width: 20, }} />
                            <span> 4k</span>
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <small className="card-title" style={{textAlign: 'left'}}>@andresospina</small>
                </div>
                <p className="card-text" style={{textAlign: 'left'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Post;