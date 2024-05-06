import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <HiOutlineMenuAlt2 size={"1.5rem"} />
        </Link>
        <Link to="/">
          <HiOutlineHome size={"1.5rem"} />
        </Link>
        <Link to="/cart">
          <CiShoppingCart size={"1.5rem"} />
        </Link>
        <Link to="/fav">
          <CiHeart size={"1.5rem"} />
        </Link>
        <Link to="/orders">
          <CiDeliveryTruck size={"1.5rem"} />
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
