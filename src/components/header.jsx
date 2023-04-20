import userImg from '../assets/default/user.png';
import boltImg from '../assets/default/bolt.png';

function Header() {
    return (
        <header className=''>
            <div className='navbar-expand sticky-top'>
                <div className='row pt-2 shadow-sm mb-3 bg-body-tertiary '>
                    <div className='col-2'>
                        <img className="img-fluid" src={boltImg} style={{ width: 30, height: 30 }} alt='' />
                    </div>
                    <div className='col-8'>
                        <h4>three pics</h4>
                    </div>
                    <div className='col-2 align-items-start'>
                        <img className="img-fluid" src={userImg} style={{ width: 30, height: 30 }} alt='' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="input-group mb-3 px-3">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;