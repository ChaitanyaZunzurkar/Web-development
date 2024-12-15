import { useState } from "react";
import style from "../Stylesheets/signin.module.css";
import signin from "../assets/signin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    console.log(formData);

    try {
      const userData = await axios.post("http://localhost:3000/user/signin",formData);
      console.log(userData);
      setFormData({ email: "", password: "" });
      navigate("/");

      const token = userData.data.token
      localStorage.setItem("token" , token)
    } catch (error) {
      console.log("Fail to fetch sigin data");
      console.log(error);
    }
  }

  return (
    <div className={style["bg-gradient"]}>
      <div className={style["signup-container"]}>
        <div className={`${style["image-container"]} hidden md:flex`}>
          <img
            alt="Illustration of a secure login process with a lock and documents"
            className={style["image"]}
            src={signin}
          />
        </div>
        <div className={style["form-container"]}>
          <h2 className={style["title"]}>Welcome to Focus!</h2>
          <p className={style["description"]}>Register your account</p>

          <form onSubmit={submitHandler}>
            <div className={style["input-container"]}>
              <label className={style["label"]} htmlFor="email">
                <strong>Email</strong>
              </label>

              <input
                className={style["input"]}
                id="email"
                name="email"
                placeholder="focus001@gmail.com"
                type="email"
                onChange={changeHandler}
                value={formData.email}
              />
            </div>

            <div className={style["input-container"]}>
              <label className={style["label"]} htmlFor="password">
                <strong>Password</strong>
              </label>

              <input
                className={style["input"]}
                id="password"
                name="password"
                placeholder="password"
                type="password"
                onChange={changeHandler}
                value={formData.password}
              />
            </div>

            <div className={style["input-container"]}>
              <button className={style["login-button"]} type="submit">
                Register
              </button>
            </div>
          </form>

          <div className={style["header"]}>
            <span className={style["text-gray"]}>
              Don&apos;t have an account?
            </span>
            <span className={style.signin} onClick={() => navigate("/api/v1/signup")}>
              SIGN UP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
