import { NavLink } from 'react-router-dom'
import todo from '../assets/to-do.svg'
import style from '../Stylesheets/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.navPages}>
            <div className={style.logoContainer}>
              <img src={ todo } alt='ToDo'  className={style.logo}/>
              <strong className={style.heading}>To Do</strong>
            </div>
            
            <div className={style.navLinks}>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/user/todo'>To-Do</NavLink>
            </div>
        </div>

        <div className={style.btnContainer}>
            <NavLink to='/user/signin'>
              <button className={style.btn}>Sign in</button>
            </NavLink>

            <NavLink to='/user/signup'>
              <button className={style.btn}>Sign up</button>
            </NavLink>
        </div>
    </div>
  )
}


export default Navbar
