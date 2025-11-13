import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import PrivetRoute from "../Provider/PrivateRoute";
import MyEnrolledCourse from "../Pages/MyEnrolledCourse";
import AddCourse from "../Pages/AddCourse";
import MyAddedCourse from "../Pages/MyAddedCourse";
import CourseDetails from "../Pages/CourseDetails";
import ErrorPage from "../Pages/ErrorPage";
import UpdateCourse from "../Pages/UpdateCourse";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import ForgetPassword from "../Pages/ForgatPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/my-enrolled-course",
        element: (
          <PrivetRoute>
            <MyEnrolledCourse></MyEnrolledCourse>
          </PrivetRoute>
        ),
      },
      {
        path: "/add-course",
        element: (
          <PrivetRoute>
            <AddCourse></AddCourse>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-added-course",
        element: (
          <PrivetRoute>
            <MyAddedCourse></MyAddedCourse>
          </PrivetRoute>
        ),
      },
      {
        path: "/course-details/:id",
        element: (
          <PrivetRoute>
            <CourseDetails></CourseDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-1.onrender.com/courses/${params.id}`
          ),
      },
      {
        path: "/update-course/:id",
        element: (
          <PrivetRoute>
            <UpdateCourse></UpdateCourse>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-1.onrender.com/courses/${params.id}`
          ),
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
      { path: "/auth/forget-password", Component: ForgetPassword },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
