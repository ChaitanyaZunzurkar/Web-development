
import style from '../Stylesheets/Form.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const navigate = useNavigate();

    function signupHandler() {
        toast.success("SignUp")
        navigate('/dashboard')
    }
  return (
    <div>
      <form className={style.form}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="name@gmail.com" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className={style.btn} onClick={signupHandler}>Create Account</button>
      </form>
    </div>
  );
};

export default Form;
