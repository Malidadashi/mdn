import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import catch_error from "../assets/catch_error.svg"

const Error_Page = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <img src={catch_error} alt="error 404"/>
<h1>صفحه مورد نظر یافت نشد</h1>
<p>متاسفانه صفحه مورد نظر شما وجود ندارد.</p>

    </div>
  );
};

export default Error_Page;
