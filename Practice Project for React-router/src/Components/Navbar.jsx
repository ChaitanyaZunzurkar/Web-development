import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import style from '../Stylesheets/Navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
    const navigate = useNavigate();

    function signupBtnHandler() {
        navigate('/signup')
    }

    function LoginBtnHandler() {
        navigate('/login')
    }

    function LogoutBtnHandler() {
        navigate('/login')
        toast.success("Logout")
    }

    return (
        <div>
            <header>
                <nav>
                    <div className={style.logo}>
                        <img src={logo} alt='StudyNotion' />
                    </div>

                    <div className={style.pages}>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                        <NavLink to="/contact" >Contact</NavLink>
                    </div>
                    
                    <div className={style.btns}>
                        {
                            window.location.pathname === '/dashboard' ? 
                            <button onClick={LogoutBtnHandler}>Log out</button> :
                            <button onClick={LoginBtnHandler}>Log in</button>
                        }
                        {
                            window.location.pathname === '/dashboard' ? 
                            <button>Dashboard </button> :
                            <button onClick={signupBtnHandler}>Sign Up </button> 
                        }
                    </div>
                </nav>
            </header>
        </div>
    )
}