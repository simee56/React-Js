import React, { use } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Routes, useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Home = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => data.json())
    .then((data) => setposts(data))
  }, []);

  return (
    <div>
      <div className='post-container'>
        {
          posts.map((post) =>(
            <NavLink style={{ display : 'block'}} to={`/post/${post.id}`}>
              {post.title}
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}


const PostPage = () => {
  const [data, setData] = useState([null]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}` )
    .then ((data) => data.json())
    .then ((data)=> setData(data))
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
};



const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

const Setting = () => {
  return (
    <div>
      <h1>Setting page</h1>
    </div>
  )
}

const DynamicUser = () => {
  const params = useParams();
  return (
    <div>
      <h1>Your name is {params.userName} </h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/user/:userName" element={<DynamicUser/>} />
      <Route path="/post/:postId" element={<PostPage />} />

      <Route path="account">
        <Route path="Profile" element={<Profile />} />
        <Route path="Setting" element={<Setting/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
