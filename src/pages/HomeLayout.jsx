import { Outlet } from "react-router-dom";
import { Navbar } from "../componenets";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="align-element">
        <Outlet />
      </section>
    </div>
  );
};
export default HomeLayout;
