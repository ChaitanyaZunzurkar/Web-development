import { useState } from 'react';
import style from '../Stylesheets/signin.module.css';
import signin from '../assets/signin.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [formData , setFormData] = useState({email : '' , password : ''})
  const navigate = useNavigate()

  function changeHandler(event) {
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
  }

  async function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
    
    const data = {
      email : formData.email,
      password : formData.password
    }

    try{
      const URL = 'http://localhost:3000/user/signin'
      const response = await axios.post(URL , data)
      console.log(response.data)
    }
    catch(error) {
      console.log(error)
      console.log("Fail to store data in DB")
    }
    setFormData({email:'' , password: ''})
    navigate('/user/todo')
  }

  return (
    <div className={style['bg-gradient']}>
      <div className={style['signup-container']}>
        <div className={`${style['image-container']} hidden md:flex`}>
          <img
            alt="Illustration of a secure login process with a lock and documents"
            className={style['image']}
            src={signin}
          />
        </div>
        <div className={style['form-container']}>
          <h2 className={style['title']}>Welcome to Focus!</h2>
          <p className={style['description']}>Register your account</p>

          <form onSubmit={submitHandler}>

            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="email">
                <strong>Email</strong>
              </label>

              <input
                className={style['input']}
                id="email"
                name="email"
                placeholder="focus001@gmail.com"
                type="email"
                onChange={changeHandler}
                value={formData.email}
              />

            </div>

            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="password">
                <strong>Password</strong>
              </label>

              <input
                className={style['input']}
                id="password"
                name="password"
                placeholder="password"
                type="password"
                onChange={changeHandler}
                value={formData.password}
              />

            </div>

            <div className={style['input-container']}>
                <button className={style['login-button']} type='submit'>
                    Register
                </button>
            </div>

          </form>

          <div className={style['header']}>
            <span className={style['text-gray']}>Don&apos;t have an account?</span>
            <span className={style.signin}>SIGN UP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
