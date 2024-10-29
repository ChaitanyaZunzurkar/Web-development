/* eslint-disable react/prop-types */
import { FcLike } from "react-icons/fc";
import style from '../StyleSheets/Card.module.css'

export const Card = ({course}) => {
  const info = course.description.substring(0 , 200) + '....';
  return (
    <div key={course.id} className={style.container}>
      <div className={style.card}>
        <img src={course.image.url} alt={course.image.alt}></img>
        <div>
          <button className={style.heartIcon}><FcLike size={80} style={{height:'35px' , width:"35px"}}/></button>
        </div>
        <div className={style.content}>
          <strong className={style.title}>{course.title}</strong>
          <p className={style.description}>{info}</p>
        </div>
      </div>
    </div>
  );
};
