import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../componenets";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};
export default HomeLayout;
