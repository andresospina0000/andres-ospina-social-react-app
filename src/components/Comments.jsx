import Comment from "./Comment";

function PostComments({ comments, setSection }) {

    return (
        <div>
            <div className="row" style={{ alignItems: 'start' }}>
                <div className="col-6">
                    <button className="btn btn-light fw-bold" style={{ width: 50 + '%' }} onClick={() => setSection('/')}>{`<`}</button>
                </div>
                <div className="col-6" style={{textAlign: 'center'}}>
                    <p className="fw-bold">Comentarios</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {comments.map(({ text, avatar, name, user, bio, createdAt, updatedAt, id }) => (
                            <Comment key={id} text={text} username={user.username} date={createdAt} />
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default PostComments;
