import { useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase'

function PostDetail() {
  const [post, setPost]=useState({});
  const {postId}=useParams();

  db.collection('posts')
  .doc(postId)
  .get()
  .then((snapshot)=>{
    const post=snapshot.data()
    setPost(post)
  })


 
    return (
      <div className="parent-container">
             <div>
                  <h2>{post.title}</h2>
                  <h3> {post.subTitle} </h3>
                  <p>
                    {post.content}
                  </p>
              

              </div>
      </div>
    );
  }
  
export default PostDetail;