import { Routes, Route } from "react-router-dom";
/* => Layouts */
import AuthLayout from "./components/layouts/Auth";
import MainLayout from "./components/layouts/Main";
import DashboardLayout from "./components/layouts/Dashboard";
/* => Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
/* => public */
import Home from "./components/public/Home";
import Posts from "./components/public/Posts";
import Show from "./components/public/Show";
import About from "./components/public/About";
import Contact from "./components/public/Contact";
/* => dashboard */
import Dashboard from "./components/dashboard/Dashboard";
import DashboardPosts from "./components/dashboard/Posts";
import DashboardUsers from "./components/dashboard/Users";
import DashboardCategories from "./components/dashboard/Categories";
/* => Errors */
import R404 from "./components/errors/R404";
/* => Redux/toolkit */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { api } from "./api";
import { store } from "./store/features/UserSlice";
/* => Profile */
import Profile from "./components/Profile";

function App() {
  /*__________ Hooks __________*/
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage["token"]) {
      async function fetch_profile() {
        try {
          const response = await api({
            url: "/profile",
            method: "get"
          })
          dispatch(store({ user: response.data, token: localStorage["token"] }))
        } catch (err) {
        }
      }
      fetch_profile()
    }
  }, [dispatch])


  /*__________ JSX __________*/
  return (
    <div className="App bg-darker-blue text-white min-h-screen">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:search" element={<Posts />} />
          <Route path="post/:id" element={<Show />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="posts" element={<DashboardPosts />} />
          <Route path="users" element={<DashboardUsers />} />
          <Route path="categories" element={<DashboardCategories />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<R404 />} />
      </Routes>
    </div>
  );
}

export default App;
