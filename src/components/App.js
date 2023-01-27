import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

function App() {
  return (
    <div className="container">
        <Navbar/>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/post/:postId' element={<PostDetail/>}/>
            <Route  path='/create-post' element={<CreatePost/>}/>
          </Routes>
    </div>
  );
}

export default App;
