import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import SignUp from "../../pages/auth/SIgnUp";
import SignIn from "../../pages/auth/SignIn";
import PostForm from "../../pages/post-form/PostForm";
import Profile from "../../pages/profile/Profile";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/post-form",
      element: <PostForm />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return routes;
};

export default AppRoutes;
