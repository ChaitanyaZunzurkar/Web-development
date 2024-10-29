/* eslint-disable react/prop-types */
import { Card } from "./Card";
import style from '../StyleSheets/Cards.module.css'

const Cards = ({ coursesData }) => {
    let allCourses = [];
    function getCourseDetails() {
        Object.values(coursesData).forEach((course) => {
            course.forEach(details => {
                allCourses.push(details)
            });
        })
        console.log("Courses array" , coursesData)
        return allCourses;
    }

    return (
        <div className={style.cardContainer}>
            {
                getCourseDetails().map((course) => {
                    return (
                        <Card course={course} key={course.id} />
                    )
                })
            }
        </div>
    )
}

export default Cards