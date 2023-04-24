import Comment from "./Comment";

function PostComments({ comments, setSection }) {

    return (
        <div>
            <div className="row" style={{ alignItems: 'start' }}>
                <div className="col">
                    <button className="btn btn-secondary" style={{ width: 100 + '%' }} onClick={() => setSection('/')}>{`< atras`}</button>
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
