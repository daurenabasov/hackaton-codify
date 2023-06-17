import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";
import { useEffect } from "react";
import notFound from "../../assets/404.png";

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
      <img src={notFound} alt="404" />

      <div className="redirect">
        Do you want to go to <Link to="/">home</Link> page?
      </div>
    </div>
  );
};

export default NotFound;
