import React from "react";
import { Link } from "react-router-dom";
import Animation from "./Animation";
const Home = () => {
  return (
    <Animation animationId={2}>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">پنل مدیریت کاربران</h1>
        <p className="text-gray-600 mb-8">برای مدیریت کاربران یکی از گزینه‌ها را انتخاب کنید.</p>
        <div className="flex gap-4">
          <Link to="/users" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl">
            لیست کاربران
          </Link>
          <Link to="/add-user" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-2xl">
            افزودن کاربر
          </Link>
        </div>
      </div>
    </Animation>
  );
};

export default Home;
