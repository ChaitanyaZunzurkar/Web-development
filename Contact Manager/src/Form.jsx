/* eslint-disable react/prop-types */
import { useState } from "react"
import style from './Form.module.css'

export default function Form({addNewData}) {
    const [contactDetails , setDetails] = useState({name:"" , email:"" , number:""})

    function changeHandler(event) {
        setDetails((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        let newData = { ...contactDetails };
        console.log(newData);
        addNewData(newData)
        setDetails({name: "", email: "", number: ""})
    }

    return (
        <div className={style.formContainer}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name  :</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={contactDetails.name}
                    onChange={changeHandler}
                    placeholder="person"
                />

                <label htmlFor="email">Email :</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={contactDetails.email}
                    onChange={changeHandler}
                    placeholder="person@gmail.com"
                />

                <label htmlFor="number">Number : </label>
                <input 
                    type="number"
                    id="number"
                    name="number"
                    value={contactDetails.number}
                    onChange={changeHandler}
                    placeholder="123345678"
                />

                <button className={style.btn}>Save</button>
            </form>
        </div>
    )
}