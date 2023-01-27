
import db from '../firebase'
import {useFormInput} from '../hooks'

function CreatePost() {
  const title=useFormInput('');
  const subTitle=useFormInput('');
  const content=useFormInput('')


  function handleSubmit(e){
    e.preventDefault();

    if(title && subTitle && content){
        db.collection('posts').add({
          title:title.value,
          subTitle:subTitle.value,
          content:content.value,
          createdAt:new Date()
        })
        .then((post)=>{
           console.log("post is created", post)
        })
        .catch((error)=>{
          console.log("error in creating post", error)
        })
    }
  }

    return (
      <div className="create-post-container">
          <h3>Create Post</h3>
            <form onSubmit={handleSubmit}>
                <div>
                   <label>Title</label>
                   <input {...title} />
                </div>
                <div>
                   <label>Sub-title</label>
                   <input {...subTitle} />
                </div>
                <div>
                   <label>Content</label>
                   <textarea {...content}></textarea>
                </div>
                <div>
                    <button className='btn'>Create Post</button>
                </div>
            </form>
      </div>
    );
  }
  
export default CreatePost;