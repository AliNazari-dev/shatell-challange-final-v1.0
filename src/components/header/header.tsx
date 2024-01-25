import Navbar from "../navbar/Navbar";
import HeaderBanner from "./header-banner";

const Header = () => {
  return (
    <header className="h-[100vh]">
      <Navbar />
      <HeaderBanner />
    </header>
  );
};

export default Header;
