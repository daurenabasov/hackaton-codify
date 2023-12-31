import { useState } from "react";
import "./SIgnUp.css";
import { useDispatch } from "react-redux";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(signInFetch(data)).then(() => {
      navigate("/");
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
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};

export default SignIn;
