import style from '../Stylesheets/Signup.module.css';
import signup from '../assets/signup.png'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData , setFormData] = useState({ name:'' , email : '' , password : ''})
  const navigate = useNavigate()

  function changeHandler(event) {
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
      // console.log(formData)
  }

  async function submitHandler(event) {
    event.preventDefault();
    console.log(formData)

    const data = {
      name: formData.name,
      email: formData.email,
      password : formData.password
    }

    try{
      const URL = 'http://localhost:3000/user/signup'
      const response = await axios.post(URL , data);
      console.log(response.data)
    }
    catch(error) {
      console.log(error)
      console.log("Fail to send data to DB")
    }
    setFormData({name: '', email:'' , password: ''})
    navigate('/user/todo')
  }

  return (
    <div className={style['bg-gradient']}>
      <div className={style['signup-container']}>
        <div className={`${style['image-container']} hidden md:flex`}>
          <img
            alt="Illustration of a secure login process with a lock and documents"
            className={style['image']}
            src={signup}
          />
        </div>
        <div className={style['form-container']}>
          <h2 className={style['title']}>Welcome to Focus!</h2>
          <p className={style['description']}>Register your account</p>

          <form onSubmit={submitHandler}>
            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                className={style['input']}
                id="name"
                placeholder="person"
                type="text"
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
            </div>
            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                className={style['input']}
                id="email"
                placeholder="focus001@gmail.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>
            <div className={style['input-container']}>
              <label className={style['label']} htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                className={style['input']}
                id="password"
                placeholder="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            </div>

            <div className={style['input-container']}>
                <button className={style['login-button']} type='submit'>
                    Register
                </button>
            </div>
          </form>

          <div className={style['header']}>
              <span className={style['text-gray']}>Already have an account?</span>
              <span className={style.signin}>SIGN IN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
