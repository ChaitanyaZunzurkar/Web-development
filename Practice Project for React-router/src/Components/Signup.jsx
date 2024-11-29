/* eslint-disable react/prop-types */
import style from '../Stylesheets/signup.module.css'
import Form from './Form'

const Signup = ({signupHandler}) => {
  return (
    <div className={style.container}>
        <div className={style.loginForm}>
            <h1>Join the millons learning to code with StudyNotion for free</h1>
            <p>Build skills for today , tomorrow and beyond</p>
            <p><span>Education to future-proof your carrer</span></p>

            <button>Student</button>
            <button>Instructor</button>
            <Form signupHandler={signupHandler}/>
            <button>Sign in with google</button>
        </div>
    </div>
  )
}

export default Signup