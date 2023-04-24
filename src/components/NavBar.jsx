import userImg from '../assets/default/user.png';
import boltImg from '../assets/default/bolt.png';

function NavBar({ setSection, getProfile }) {

    return (
        <header className=''>
            <div className='navbar-expand'>
                <div className='row pt-2 shadow-sm mb-3 bg-body-tertiary'>
                    <div className='col-2'>
                        <img className="img-fluid" src={boltImg} onClick={() => setSection('/')} style={{ width: 30, height: 30 }} alt='' />
                    </div>
                    <div className='col-8'>
                        <h4 style={{ textAlign: 'left' }}>Three pics</h4>
                    </div>
                    <div className='col-2 align-items-start'>
                        <img className="img-fluid" src={userImg} onClick={() => getProfile()} style={{ width: 30, height: 30 }} alt='' />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;