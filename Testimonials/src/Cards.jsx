/* eslint-disable react/prop-types */
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import style from "./Cards.module.css";

const Cards = ({ name, designation, message , image , LeftpointerHandling , RightpointerHandling , randomTestimonials }) => {
  return (
    <div className={style.card}>

      <div className={style.profilePic}>
        <div className={style.circle}></div>
        <div className={style.actualImg}>
            <img src={image} alt="Profile Picture" className={style.img}></img>
        </div>
      </div>

      <div>
        <div className={style.NameAndDesginationInfo}>
          <strong className={style.name}>
            <b>{name}</b>
          </strong>
          <span className={style.designation}>{designation}</span>
        </div>

        <div className={style.messageContainer}>
          <FaQuoteLeft size={10} color="rgb(200, 0, 255)" />
          <p>{message}</p>
          <FaQuoteRight size={10} color="rgb(200, 0, 255)" />
        </div>

        <div className={style.curaousal}>
          <button type="button" className={style.curaousalBtn} onClick={LeftpointerHandling}>
            <MdChevronLeft size={24} color="rgb(200, 0, 255)" />
          </button>

          <button type="button" className={style.curaousalBtn} onClick={RightpointerHandling}>
            <MdChevronRight size={24} color="rgb(200, 0, 255)" />
          </button>
        </div>

        <div className={style.btnContainer}>
          <button type="button" className={style.srpriseBtn} onClick={randomTestimonials}>
            <b>Surprise me</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
