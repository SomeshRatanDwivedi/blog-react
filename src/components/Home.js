import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import db from '../firebase'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          let data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        setPosts(posts)

      })
  }, [posts]);


  function deletePost(postId){
    db.collection('posts')
    .doc(postId)
    .delete()
    .then(()=>{
      console.log("post is deleted")
    })

  }


  function editPost(){
    console.log("edit")

  }

  return (
    <div className="parent-container">
      <h1>Tech Blog</h1>

      <ul>
        {
          posts.map((post, index) => {
            return (

              <li key={`post-${index}`}>
                <div>
                  <button className="btn">
                    Edit Post
                  </button>
                  <button className="btn" onClick={()=>deletePost(post.id)}>
                    Delete Post
                  </button>
                </div>
                <Link to={`/post/${post.id}`}>
                  <h2>{post.title}</h2>
                  <h3> {post.subTitle} </h3>
                  <p>
                    {post.content}
                  </p>
                </Link>

              </li>


            )
          })
        }
      </ul>


    </div>
  );
}

export default Home;


