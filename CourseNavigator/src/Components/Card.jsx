/* eslint-disable react/prop-types */
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import style from '../StyleSheets/Card.module.css'
// import { useState } from "react";
import { toast } from "react-toastify";

export const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const info = course.description.length > 100 ? course.description.substring(0 , 150) + '....' : course.description;

  function likeHandler() {
    if(likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id))
      toast.warning("Like Removed");
    }
    else {
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        setLikedCourses((prev) => [...prev , course.id])
      }

      toast.success("Liked Successfully");
    }
  }

  return (
    <div key={course.id} className={style.container}>
      <div className={style.card}>
        <img src={course.image.url} alt={course.image.alt}></img>
        <div>
          <button className={style.heartIcon} onClick={likeHandler}>
            { 
              likedCourses.includes(course.id) ? 
              <FcLike size={80} style={{height:'35px' , width:"35px"}}/> : 
              <FcLikePlaceholder size={80} style={{height:'35px' , width:"35px"}}/>
            }
          </button>
        </div>
        <div className={style.content}>
          <strong className={style.title}>{course.title}</strong>
          <p className={style.description}>{info}</p>
        </div>
      </div>
    </div>
  );
};
