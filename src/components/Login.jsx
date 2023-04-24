
function Login({ onLoginComplete, loginStatus }) {

    console.log('Login status Error: ', loginStatus);
    return (
        <div>
            <form>
                <div className="pt-4">
                    <h1>Three Pics</h1>
                </div>
                <div hidden={true} className="alert alert-danger d-flex align-items-center" role="alert">
                    <div>
                        <p>Email o password invalidos, por favor intenta de nuevo!</p>
                    </div>
                </div>
                <div className="container" style={{ textAlign: 'start' }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input itemID="emailInput" type="email" className="form-control" id="exampleInputEmail1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input itemID="emailPsw" type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="button" className="btn btn-primary" style={{ width: 100 + '%' }} onClick={() => onLoginComplete()}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;