import Footer from "../Footer";
import MobileNav from "../MobileNav";
import Navbar from "../Navbar";
import ScrollToTop from "../scrolltotop";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTop />
      <MobileNav />
      <Footer />
    </>
  );
}
