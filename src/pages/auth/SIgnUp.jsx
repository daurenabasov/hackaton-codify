import { useState } from "react";
import "./SIgnUp.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpFetch } from "../../app/store/thunks/sign-up/sign-up.thunk";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false);

  const { error } = useSelector(state => state.signUp)

  console.log(error);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleChange = (setState) => {
    return (e) => {
      setState(e.target.value)
    }
  }



  const handleSumbit = (e) => {
    e.preventDefault()
    dispatch(signUpFetch({ email, password })).then(() => {
      setSuccess(true)
      setEmail("")
      setPassword("")
      navigate("/sign-in")
    }).catch((error) => {
      setSuccess(false)
    })

  }




  return (
    <div className="login-box" >
      {success ? (
        <p>Error occurred during registration.</p>

      ) : (
        <p></p>

      )}
      <h2>Registration</h2>
      <form onSubmit={handleSumbit}>
        <div className="user-box">
          <input type="text" name="" onChange={handleChange(setEmail)} value={email} required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" onChange={handleChange(setPassword)} required="" />
          <label>Password</label>
        </div>

        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
