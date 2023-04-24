
function Profile({ avatar, username, bio, onLogout }) {



    return (
        <div className="row">
            <div className="col">
                <div>
                    <img src={avatar} className="card-img-top" alt="..." style={{ borderRadius: 50 + '%', width: 40 + '%' }} />
                </div>
                <div className="mx-4">
                    <div className="card-body">
                        <h6 className="card-title py-3">@{username}</h6>
                        <p className="card-text">{bio}</p>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-secondary" onClick={() => onLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default Profile;