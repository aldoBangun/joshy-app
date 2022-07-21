import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

const DisplayNav = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DisplayNav;