import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const USER_KEY = "users";

const getUsersFromStorage = () => JSON.parse(localStorage.getItem(USER_KEY)) || [];
const saveUsersToStorage = (users) => localStorage.setItem(USER_KEY, JSON.stringify(users));

const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const userImages = ["/img/person1.jpg", "/img/person2.jpg", "/img/person3.jpg", "/img/person4.jpg" ,"/img/person5.avif"];

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const users = getUsersFromStorage();
      const existingUser = users[id];
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [id, isEdit]);

  // توست خطا
  const showError = (message) => {
    toast.error(`❌ ${message}`, {
      position: "top-right",
      theme: "colored",
      autoClose: 2000,
      rtl: true,
    });
  };

  // توست موفقیت
  const showSuccess = (message) => {
    toast.success(`✅ ${message}`, {
      position: "top-right",
      theme: "colored",
      autoClose: 2000,
      rtl: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!user.name.trim() || !user.lastName.trim() || !user.email.trim()) {
      showError("لطفاً همه‌ی فیلدها را پر کنید.");
      return;
    }

    setIsSubmitting(true);

    const users = getUsersFromStorage();
    if (isEdit) {
      users[id] = user;
      showSuccess("اطلاعات کاربر با موفقیت ویرایش شد!");
    } else {
      const randomIndex = Math.floor(Math.random() * userImages.length);
      const userWithImg = { ...user, img: userImages[randomIndex] };
      users.unshift(userWithImg);
      showSuccess("کاربر با موفقیت افزوده شد!");
    }

    saveUsersToStorage(users);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/users");
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-10">{isEdit ? "ویرایش کاربر" : "افزودن کاربر"}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8">
        <img src={!!user.img ? user.img : "/img/emptyperson.jpg"} alt="" className="rounded-2xl mb-10  h-56" />
        <div className="inputstyle w-full relative">
          <input type="text" name="name" placeholder="" className=" border p-2 rounded w-full mb-2" value={user.name} onChange={handleChange} />
          <label className="absolute pointer-events-none" htmlFor="">
            نام
          </label>
        </div>
        <div className="inputstyle w-full relative">
          <input type="text" name="lastName" placeholder="" className="  border p-2 rounded w-full mb-2" value={user.lastName} onChange={handleChange} />
          <label className="absolute pointer-events-none" htmlFor="">
            نام خانوادگی
          </label>
        </div>
        <div className="inputstyle w-full relative">
          <input type="email" name="email" placeholder="" className="  border p-2 rounded w-full mb-2" value={user.email} onChange={handleChange} />
          <label className="absolute pointer-events-none" htmlFor="">
            ایمیل
          </label>
        </div>

        <div className="flex justify-between w-[80%]">
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800 duration-200" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
          </button>
          <button type="button" onClick={() => navigate("/users")} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 duration-200">
            انصراف
          </button>
        </div>
      </form>

      {/* جایگاه نمایش نوتیف
      <ToastContainer /> */}
    </div>
  );
};

export default UserForm;
