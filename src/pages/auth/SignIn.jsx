import "./SignIn.css";

const SignIn = () => {
  return (
    <div class="login-box">
      <h2>Authorization</h2>
      <form>
        <div class="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
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
          SIGN IN
        </a>
      </form>
    </div>
  );
};

export default SignIn;
