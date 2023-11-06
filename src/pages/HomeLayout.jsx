import { Outlet } from "react-router-dom";
import { Navbar } from "../componenets";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
