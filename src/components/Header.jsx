import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Muzammil Shop</h1>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Search product" />
        <CiSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Header;
