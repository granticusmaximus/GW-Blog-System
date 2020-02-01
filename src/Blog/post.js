import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading && !currentPost) {
    fire()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }


  if (loading) {
    return <div className="container"><center>
      <Loader
         type="Grid"
         color="#04C2C9"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
    </center></div>;
  }
  else {
  return (
    <div>

      <div className='container'>
        <h1 className='pageHeader'>{currentPost.title}</h1>
        <center><img src={currentPost.coverImage} alt={currentPost.coverImageAlt} className='postImg'/></center>
        <em>{currentPost.datePretty}</em>
        <br/>
        <em>{currentPost.author}</em>
        <hr/>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </div>
    </div>
  );
    }
};

export default Post;
