import { useState } from "react";

import { close, menu } from "../assets";
import "./Navbar.css";
import { navLinks } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { setupStore } from "../app/store/store";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/sign-in")
  }


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <p className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")} >INVEST</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {
          isAuth ? <>

            {navLinks.map((nav, index) => (

              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-fuchsia-600	" : "text-black"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                {<Link to={nav.id}>{nav.title}</Link>}
              </li>
            ))}
            <Button onClick={handleLogout} sx={{
              padding: "10px 30px",
              background: "#9333EA",
              marginLeft: "100px",
              color: "#fff",
              '&:hover': {
                background: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
                color: '#000',
              },
            }} >
              logout
            </Button>
          </> : <>
            <Button onClick={() => navigate("/sign-in")} sx={{
              padding: "10px 30px",
              background: "#9333EA",
              color: "#fff",
              '&:hover': {
                background: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
                color: '#000',
              },
            }} >
              Sign in
            </Button>
          </>
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.id}>{nav.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
