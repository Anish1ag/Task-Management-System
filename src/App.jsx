import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/loginPage/Login";
import LoginLayout from "./components/loginLayout/LoginLayout";
import Register from "./pages/registerpage/Register";
import MainLayout from "./components/mainlayout/MainLayout";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ErrorPage from "./components/ErrorPage";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import CardDesc from "./pages/dashboard/components/CardDesc";
import Timeline from "./pages/profile/components/Timeline";
import ProfileAbout from "./pages/profile/components/ProfileAbout";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import ErrorComponent from "./components/errorComponent/ErrorComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="*" element={<ErrorPage />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
        errorElement={<ErrorComponent />}
      >
        <Route
          path="profile"
          element={<Profile />}
          errorElement={<ErrorComponent />}
        >
          <Route
            path="timeline"
            element={<Timeline />}
            errorElement={<ErrorComponent />}
          />
          <Route
            index
            element={<ProfileAbout />}
            errorElement={<ErrorComponent />}
          />
        </Route>
        <Route
          index
          element={<Dashboard />}
          errorElement={<ErrorComponent />}
        />
        <Route
          path="task/:id"
          element={<CardDesc />}
          errorElement={<ErrorComponent />}
        />
      </Route>

      <Route
        path="/"
        element={<LoginLayout />}
        errorElement={<ErrorComponent />}
      >
        <Route
          path="login"
          element={<Login />}
          errorElement={<ErrorComponent />}
        />
        <Route
          path="register"
          element={<Register />}
          errorElement={<ErrorComponent />}
        />
        <Route
          path="forgotpass"
          element={<ForgotPassword />}
          errorElement={<ErrorComponent />}
        />
        <Route index element={<Navigate to={"/login"} />} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
