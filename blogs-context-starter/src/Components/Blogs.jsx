// import Post from "./Post"
import { FadeLoader } from "react-spinners";
import { AppContext } from "../Context/AppContext"
import { useContext } from "react";
import Post from "./Post";

const Blogs = () => {
  const { loading , posts } = useContext(AppContext)
  return (
    <div
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        minHeight:"100vh"
      }}
    >
      {
          loading ? 
          (
            <FadeLoader color="#36d7b7" loading={true} size={150} /> 
          ) :
          (
            posts.length === 0 ? 
            (
              <p>No Data Found</p>
            ):
            (
              posts.map((post , id) => (
                <Post post={post} key={id}/>
              ))
            )
          )

      }
    </div>
  )
}

export default Blogs
