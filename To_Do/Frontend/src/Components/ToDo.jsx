import { useState } from 'react'
// import { useEffect } from 'react'
import style from '../Stylesheets/ToDo.module.css'
import TaskComponent from './TaskComponent'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const ToDo = () => {
    const [task , setTask] = useState('')
    const [taskArr , setTaskArr] = useState([])
    // const location = useLocation();

    // async function fetchData() {
    //     const URL = 'http://localhost:3000/signin'
    //     try{
    //         let res = await axios.get(URL)
    //         let resData = res.data;
            
    //         console.log("res" , res)
    //         console.log("data" , resData)
    //         // setTaskArr(res.data.tasks);
    //     }
    //     catch(error) {
    //         console.log(error)
    //         console.log("Fail to fetch task data");
    //     }
    // }
 

    function changeHandler(event) {
        setTask(event.target.value)
        // console.log(task)
    }

    function addTaskHandler() {

        setTaskArr([...taskArr , task])
        console.log(taskArr)
        setTask('')
    }

    function deleteTask(task) {
        console.log(task)
        setTaskArr(taskArr.filter((Task) => task != Task))
    }

    return (
            (
                <div className={style.container}>
                    <h1 className={style.heading}>Manage Task</h1>
                    <div className={style.inputBox}>
                        <input 
                            type='text'
                            name='task'
                            id='task'
                            onChange={changeHandler}
                            placeholder='Add task here..'
                            value={task}
                        />
                        <button onClick={addTaskHandler}>Add</button>
                    </div>

                    <div className={style.horizontal}></div>
                    
                    {
                        taskArr.length === 0 ? 
                        <h1>No tasks to do</h1> :
                        (
                            taskArr.map((task , index) => (
                                <TaskComponent key={index} task={task} deleteTask={deleteTask}/>
                            ))
                        )
                    }
                </div>
            )
    )
}

export default ToDo