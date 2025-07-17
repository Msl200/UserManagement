import React from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./Routes";
const App = () => {
  let allroutes = useRoutes(routes);
  return (
    <div className=" bg-gray-50">
      {allroutes}
      <ToastContainer position={"top-right"} autoClose={3000} toastStyle={{ fontFamily: "Lalezar, sans-serif", fontSize: "15px", direction: "rtl", textAlign: "right" }} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} />
    </div>
  );
};

export default App;
