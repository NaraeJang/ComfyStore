import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Navbar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-element py-20 min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default HomeLayout;
