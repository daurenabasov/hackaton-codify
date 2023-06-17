import { useState } from "react";
import "./SIgnUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signInFetch } from "../../app/store/thunks/sign-in/sign-in.thunk";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value);
    };
  };
  const error = useSelector((state) => state.auth.error);
  const message = useSelector((state) => state.auth.message);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(signInFetch(data))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // Handle error based on status code
        if (error.response.status === 401) {
          // Unauthorized error
          console.log("Unauthorized error: Please check your credentials");
        } else if (error.response.status === 500) {
          // Internal server error
          console.log("Internal server error: Something went wrong");
        } else {
          console.log("Unknown error occurred");
        }
      });
  };

  return (
    <div className="login-box">
      <h2>Authorization</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="email"
            name=""
            value={email}
            onChange={handleChange(setEmail)}
            required=""
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            value={password}
            onChange={handleChange(setPassword)}
            required=""
          />
          <label>Password</label>
        </div>
        {error ? <p>пошел нахуй</p> : ""}
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};

export default SignIn;
