import "./SIgnUp.css";

const SignUp = () => {
  return (
    <div className="login-box">
      <h2>Registration</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SIGN UP
        </a>
      </form>
    </div>
  );
};

export default SignUp;
