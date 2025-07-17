import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animation from "./Animation";
const USER_KEY = "users";

const getUsersFromStorage = () => JSON.parse(localStorage.getItem(USER_KEY)) || [];
const saveUsersToStorage = (users) => localStorage.setItem(USER_KEY, JSON.stringify(users));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setUsers(getUsersFromStorage());
  }, []);

  const confirmDelete = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleDelete = () => {
    const updated = users.filter((_, i) => i !== selectedIndex);
    setUsers(updated);
    saveUsersToStorage(updated);
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // تمیزکاری وقتی کامپوننت آنمونت میشه
    return () => document.body.classList.remove("overflow-hidden");
  }, [showModal]);

  return (
    <div className="container max-w-7xl mx-auto p-4 rounded-2xl flex flex-col">
      <div className="flex justify-between max-w-7xl items-center text-center my-10">
        <h2 className="text-2xl font-bold">لیست کاربران</h2>
        <Link to={"/add-user"} className="bg-blue-600 text-xl rounded-lg text-white py-2 px-4 hover:bg-blue-800 duration-300">
          افزودن کاربر
        </Link>
      </div>

      <Animation animationId={1}>
        <div className="flex items-center justify-center gap-7 flex-wrap max-w-7xl gap-y-10">
          {!!users.length ? (
            users.map((u, i) => (
              <div key={i} className="flex flex-col justify-start gap-10 items-center shadow shadow-gray-400 rounded-xl py-4 w-[95%] sm:w-[290px]">
                <img src={u.img} alt="pic" className="w-[90%] h-52 object-cover rounded-2xl" />
                <div>
                  <p className="font-semibold">{`${u.name} ${u.lastName}`}</p>
                  <p className="text-sm text-gray-500">{u.email}</p>
                </div>
                <div className="flex gap-2 justify-around w-full px-4">
                  <Link to={`/edit-user/${i}`} className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 duration-200 text-white flex items-center px-5 py-1 rounded">
                    <i className="bi bi-pencil-square h-5 w-5"></i>
                    ویرایش
                  </Link>
                  <button onClick={() => confirmDelete(i)} className="flex items-center justify-center gap-2  bg-red-600 hover:bg-red-700 duration-200 text-white px-6 py-1.5 rounded cursor-pointer">
                    <i className="bi bi-trash h-5 w-5"></i>
                    حذف
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>کاربری وجود ندارد</p>
          )}
        </div>
      </Animation>
      {/* MODAL */}

        {showModal && (
          <div className="fixed inset-0  backdrop-blur-xl bg-opacity-50 flex items-center justify-center z-50">
            <Animation animationId={6}>
            <div className="bg-white rounded-xl shadow-lg p-6 w-180 h-50 text-center flex flex-col items-center justify-center gap-2">
              <h3 className="text-3xl font-bold mb-4 text-red-600">حذف کاربر</h3>
              <p className="mb-6 text-lg text-gray-700">آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setShowModal(false)} className="bg-gray-400 text-white px-8 py-1.5 rounded hover:bg-gray-500">
                  انصراف
                </button>
                <button onClick={handleDelete} className="bg-red-600 text-white px-8 py-1.5 rounded hover:bg-red-700">
                  حذف
                </button>
              </div>
            </div>
      </Animation>
          </div>
        )}
    </div>
  );
};

export default UserList;
