import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";
import { useEffect } from "react";

const NotFound = () => {
  const { pathname } = location;

  const path = pathname.split("");

  const navigate = useNavigate();

  path.shift();

  const pathName = path.join("");

  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(time);
  }, []);

  return (
    <div className="not-found">
      <h1 className="fourths">404</h1>

      <h2 className="page">Page not found!</h2>

      <div className="path">
        <p>{pathName}</p> page does not exist!
      </div>

      <div className="warning">
        In 10 seconds you will automatically go to the main page!
      </div>

      <div className="redirect">
        Do you want to go to <Link to="/">home</Link> page?
      </div>
    </div>
  );
};

export default NotFound;
