import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayNav from "./pages/DisplayNav";
import HideNav from "./pages/HideNav";
import Candidate from "./pages/Candidate";
import Landing from "./pages/landing/index";
import Login from "./pages/login";
import RegisterUser from "./pages/register-user";
import RegisterCompany from "./pages/register-company";
import Forgot from "./pages/forgot";
import Hiring from "./pages/Hiring";
import Profile from "./pages/profile/ProfileDetails";
import EditProfile from "./pages/profile/EditProfile";
import HireUserDetails from "./components/hires/HireUserDetails"
import withAuth from "./hoc/withAuth";
import withRedux from "./hoc/withRedux";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HideNav />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/register-company" element={<RegisterCompany />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
          <Route element={<DisplayNav />}>
            <Route path="/" element={<Landing />} />
            <Route path="/candidates" element={<Candidate />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/hire/:userId" element={<Hiring />} />
            <Route path="/user" element={<HireUserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};


const AppWithAuth = withAuth(App);
const AppWithRedux = withRedux(AppWithAuth);
export default AppWithRedux;
