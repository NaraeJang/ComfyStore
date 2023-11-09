import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
const isPageLoading = navigation.state === 'loading';
  
  return (
    <div>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20 min-h-screen">
          <Outlet />
        </section>
      )}

      <Footer />
    </div>
  );
};
export default HomeLayout;
