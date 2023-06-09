import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import PostList from './components/postList';
import { GetCurrentToken, GetProfile, LogUser, StoreToken } from './services/ThreePics';
import PostComments from './components/Comments';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('/');
  const [loginOk, setLoginOk] = useState(GetCurrentToken()?.length > 0 ?? false);
  const [currentUser, setCurrentUser] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const login = () => {
    console.log('login');
    LogUser('andresospina', 'P4ssW0rd!#')
      .then((response) => {
        StoreToken(response.data.token);
        setLoginOk(true);
        setSection('/');
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


  // const Home = () => {
  //   return (
  //     <div>
  //       <NavBar setSection={setSection} getProfile={getProfile} />
  //       <SearchBar setSearch={setSearch} searchBy={search} />
  //       <PostList searchBy={search} setPosts={setPosts} posts={posts}
  //         setLogin={setLoginOk} showComments={showComments}
  //         setShowComments={setShowComments} comments={comments}
  //         setComments={setComments} setSection={setSection} />
  //     </div>
  //   )
  // };


  // return (
  //   <div className="App">

  //     <Routes>
  //       <Route path="/" element={loginOk || GetCurrentToken()?.length === 0 ?
  //         <Home />
  //         : <Login onLoginComplete={login} loginStatus={loginOk} />
  //       } />
  //       <Route path="/profile" element={loginOk || GetCurrentToken()?.length === 0 ?
  //         <Profile avatar={currentUser.avatar} username={currentUser.username} bio={currentUser.bio} onLogout={logout} /> :
  //         <Login onLoginComplete={login} loginStatus={loginOk} />}
  //       />
  //       <Route path="/comments" element={loginOk || GetCurrentToken()?.length === 0 ?
  //         <PostComments comments={comments} setSection={setSection} />
  //         : <Login onLoginComplete={login} loginStatus={loginOk} />}
  //       />
  //       <Route path="/login" element={<Login onLoginComplete={login} loginStatus={loginOk} />} />
  //     </Routes>
  //   </div>
  // );


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

  } else if (section === '/') {
    return (
      <div className="App">
        <NavBar setSection={setSection} getProfile={getProfile} />
        <SearchBar setSearch={setSearch} searchBy={search} />
        <PostList searchBy={search} setPosts={setPosts} posts={posts}
          setLogin={setLoginOk} showComments={showComments}
          setShowComments={setShowComments} comments={comments}
          setComments={setComments} setSection={setSection} />
      </div>
    );
  }
  else if (section === 'comments') {
    return (
      <div className="App">
        <PostComments comments={comments} setSection={setSection} />
      </div>
    );
  }
}

export default App;
