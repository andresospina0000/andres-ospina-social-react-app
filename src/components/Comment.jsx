function Comment({ username, text, date, setSection }) {

    return (

        <div className="list-group-item" style={{ textAlign: 'start' }}>
            <div className="comment__content">
                <div className="row">
                    <div className="col-6">
                        <small><span className="fw-bold">{username}</span></small>
                    </div>
                    <div className="col-6">
                        <small><span className="text-body-secondary">{date}</span></small>
                    </div>
                </div>
                <div className="fs-6">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;