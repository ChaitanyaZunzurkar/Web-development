/* eslint-disable react/prop-types */
import { Card } from "./Card";
import style from '../StyleSheets/Cards.module.css'
import { useState } from "react";

const Cards = (props) => {
    const coursesData = props.coursesData
    const [likedCourses , setLikedCourses] = useState([])
    const category = props.category;

    let allCourses = [];
    function getCourseDetails() {
        if(category === 'All') {
            Object.values(coursesData).forEach((course) => {
                course.forEach(details => {
                    allCourses.push(details)
                });
            })
            console.log("Courses array" , coursesData)
            return allCourses;
        }
        else {
            return coursesData[category]
        }
    }

    return (
        <div className={style.cardContainer}>
            {
                getCourseDetails().map((course) => {
                    return (
                        <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                    )
                })
            }
        </div>
    )
}

export default Cards