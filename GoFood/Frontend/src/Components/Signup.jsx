import style from '../Stylesheets/Signup.module.css';
import signup from '../assets/signup.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [formData , setFormData] = useState({ name:'' , email : '' , password : '' , location: '' })
  const navigate = useNavigate();

  function changeHandler(event) {
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
  }

  async function submitHandler(event) {
      event.preventDefault();
      console.log(formData)
      
      try {
        const userData = await axios.post('http://localhost:3000/api/v1/signup' , formData)
        console.log(userData)

        const token = userData.data.token
        localStorage.setItem("token" , token)
        
        navigate('/')
        setFormData({name:'' , email:'' , password: '' , location:''})
      }
      catch(error) {
        console.log("Fail to fetch user data.")
        console.error(error)
      }
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
              <label className={style['label']} htmlFor="location">
                <strong>Address</strong>
              </label>
              <input
                className={style['input']}
                id="location"
                placeholder="address"
                type="text"
                name="location"
                value={formData.location}
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
              <span className={style.signin} onClick={() => navigate('/api/v1/signin')}>SIGN IN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
