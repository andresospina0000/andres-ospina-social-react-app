import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import PostList from './components/postList';

function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
