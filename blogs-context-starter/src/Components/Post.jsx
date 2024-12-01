// import { useContext } from "react";
// import AppContext from "../Context/AppContext";

const Post = ({post}) => {
  const postStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width:"50vw",
    margin:"20px auto"
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const writerStyle = {
    fontSize: '16px',
    color: '#555',
    fontStyle: 'italic',
  };

  const postDateStyle = {
    fontSize: '14px',
    color: '#888',
    marginTop: '5px',
    padding: '3px'
  };

  const postInfoStyle = {
    marginTop: '10px',
    fontSize: '16px',
    color: '#444',
  };

  const tagsStyle = {
    marginTop: '15px',
    fontSize: '14px',
    color: '#0066cc',
  };


  return (
    <div style={postStyle}>
      <h1 style={titleStyle}>{post.title}</h1>
      <p style={writerStyle}>By {post.author} on <span style={{fontWeight:"bold" , textDecoration:"underline"}}>{post.category}</span></p>
      <span style={postDateStyle}>{post.date}</span>
  
      <p style={postInfoStyle}>{post.content}</p>
      {
        post.tags.map((tag , index) => (
          <span key={index} style={tagsStyle}>#{tag}&nbsp;&nbsp;&nbsp;</span>
        ))
      }
    </div>
  );
};

export default Post;
