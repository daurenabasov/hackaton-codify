import "./SignUp.css";

const SignUp = () => {
  return (
    <div class="login-box">
      <h2>Registration</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div class="user-box">
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
