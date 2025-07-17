import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import NotFound from "./Components/Notfound";
let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/add-user", element: <UserForm /> },
  { path: "/edit-user/:id", element: <UserForm /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
