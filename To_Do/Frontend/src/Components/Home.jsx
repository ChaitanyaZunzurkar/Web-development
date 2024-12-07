import { useNavigate } from 'react-router-dom'
import work from '../assets/work2.png'
import style from '../Stylesheets/Home.module.css'


const Home = () => {
    
    const navigate = useNavigate();

    function signupPageHandler() {
        navigate('/signup')
    }
    return (
        <div className={style['home-container']}>
            <div className={style['text-container']}>
                <h1>
                    Turning chaos into checklist success!
                </h1>
                <p>
                    Take charge of your day and crush your goals! With a to-do app, you can organize your tasks, stay focused, and watch your productivity soar—one task at a time.
                </p>
                <h2>Stay on track, every step of the way</h2>
                <p>
                    No more missed deadlines or forgotten tasks. With our intuitive interface, managing your tasks has never been easier. Keep yourself accountable and boost your productivity today!
                </p>
                <div className={style.btnContainer}>
                    <button className={style.btn} onClick={signupPageHandler} >Manage Tasks</button>
                </div>
            </div>
            <div className={style['image-container']}>
                <img src={work} alt="Work" />
            </div>

            
        </div>
    )
}

export default Home
