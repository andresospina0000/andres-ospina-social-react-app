import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import PostList from './components/postList';
import { GetCurrentToken, LogUser, StoreToken, GetProfile } from './services/ThreePics';

function App() {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('');
  const [loginOk, setLoginOk] = useState(GetCurrentToken()?.length > 0 ?? false);
  const [currentUser, setCurrentUser] = useState({});

  const login = () => {
    LogUser('andresospina', 'P4ssW0rd!#')
      .then((response) => {
        StoreToken(response.data.token);
        setLoginOk(true);
        setSection('home');
      }).catch((error) => {
        setLoginOk(false);
      });
  }

  const logout = () => {
    localStorage.clear();
    setLoginOk(false);
  }

  const getProfile = () => {
    GetProfile().then((response) => {
      setCurrentUser(response.data);
      console.log(response.data);
      setSection('profile');
    }
    ).catch((error) => {
      localStorage.clear();
      setLoginOk(false);
    });
  }

  if (!loginOk || GetCurrentToken()?.length === 0) {

    localStorage.clear();

    return (
      <div className="App">
        <Login onLoginComplete={login} loginStatus={loginOk} />
      </div>
    );

  } else if (section === 'profile') {

    return (
      <div className="App">
        <NavBar setSection={setSection} getProfile={getProfile} />
        <Profile avatar={currentUser.avatar} username={currentUser.username} bio={currentUser.bio} onLogout={logout} />
      </div>
    );

  } else {
    return (
      <div className="App">
        <NavBar setSection={setSection} getProfile={getProfile} />
        <SearchBar setSearch={setSearch} searchBy={search} />
        <PostList searchBy={search} setPosts={setPosts} posts={posts} setLogin={setLoginOk} />
      </div>
    );
  }
}

export default App;
