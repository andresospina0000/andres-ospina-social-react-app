import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import PostList from './components/postList';
import { GetCurrentToken, LogUser, StoreToken } from './services/ThreePics';

function App() {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('');
  const [loginOk, setLoginOk] = useState(GetCurrentToken()?.length > 0 ?? false);

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

  if (!loginOk || GetCurrentToken().length === 0) {
    return (
      <div className="App">
        <Login onLoginComplete={login} loginStatus={loginOk} />
      </div>
    );

  } else if (section === 'profile') {

    const profile = {
      avatar: '../assets/default/Foto.png',
      username: 'andresanipso',
      bio: `Some quick example text to build on the card title and make up the bulk of the card's content.`
    }

    return (
      <div className="App">
        <NavBar setSection={setSection} />
        <Profile avatar={profile.avatar} username={profile.username} bio={profile.bio} />
      </div>
    );

  } else {
    return (
      <div className="App">
        <NavBar setSection={setSection} />
        <SearchBar setSearch={setSearch} searchBy={search} />
        <PostList searchBy={search} setPosts={setPosts} posts={posts} />
      </div>
    );
  }
}

export default App;
