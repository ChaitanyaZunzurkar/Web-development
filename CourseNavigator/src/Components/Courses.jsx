// // import style from '../StyleSheets/Courses.module.css'
// import {apiUrl , filterData} from  '../data'
// export default function Courses() {

//     const fetchingCourseData = async (apiUrl) => {
//         try {
//             const response = await fetch();
//             if(!response.ok) {
//                 console.log("Network issue");
//             }

//             const result = await response.json()
//             const DevelopmentCourses = result.data.Development
//             const DesignCourses = result.data.Design;
//             const BusinessCourses = result.data.Business
//             const LifestyleCourses = result.data.Lifestyle

//             console.log(DesignCourses)
//             console.log(DevelopmentCourses)
//             console.log(BusinessCourses)
//             console.log(LifestyleCourses)
//         }
//         catch (error) {
//             console.log("Fail to Fetch Data" , error);
//         }
//     }

//     return (
//         <div>
//             <div>
//                 {
//                     filterData.map((course) => {
//                         return (
//                             <button type='button' key={course.id}>{course.title}</button>
//                         )
//                     })
//                 }
//             </div>
//             <div>

//             </div>
//         </div>
//     );
// }