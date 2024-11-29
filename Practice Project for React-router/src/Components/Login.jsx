import { useNavigate } from 'react-router-dom';
import style from '../Stylesheets/Login.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    function loginHandler() {
        toast.success("Login")
        navigate('/dashboard')
    }

  return (
    <div className={style.container}>
        <div className={style.loginForm}>
            <h1>Welcome Back</h1>
            <p>Build skills for today, tomorrow, and beyond</p>
            <p><span>Education to future-proof your career</span></p>

            <input type="email" placeholder="name@gmail.com" />
            <input type="password" placeholder="Password" />
            <button className={style.btn} onClick={loginHandler}>Sign in</button>
            <button>Sign in with Google</button>
        </div>
    </div>
  );
};

export default Login;
