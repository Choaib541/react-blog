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


function App() {
  return (
    <div className="App bg-darker-blue text-white min-h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Show />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
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
