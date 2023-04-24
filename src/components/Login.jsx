import { useEffect, useState } from "react";

function Login({ onLoginComplete, loginStatus }) {

    const [error, setError] = useState(false);

    useEffect(() => {
        setError(!loginStatus);
    }, [loginStatus]);

    return (
        <div>
            <form className="pb-4">
                <div className="pt-4">
                    <h1>Three Pics</h1>
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
            <div className="alert alert-danger d-flex align-items-center pt-4" role="alert" style={{ visibility: error ? 'visible' : 'hidden' }}>
                <div>
                    <p>Email o password invalidos, por favor intenta de nuevo!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;