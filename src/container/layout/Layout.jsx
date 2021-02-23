import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <div class="my-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
