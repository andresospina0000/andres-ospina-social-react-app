import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostList from './components/postList';
import Profile from './components/Profile';

function App() {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('');
  
  if (section === 'profile') {
    return (
      <div className="App">
        <NavBar setSection={setSection} />
        <Profile />
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
