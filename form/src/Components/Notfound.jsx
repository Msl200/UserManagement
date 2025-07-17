import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] font-extrabold text-gray-800">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">صفحه پیدا نشد!</p>
        <p className="text-gray-500 mb-8">شاید مسیر اشتباه وارد شده یا این صفحه حذف شده باشد.</p>
        <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
