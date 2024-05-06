import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiHeart, CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="menu">
        <Link to="/" name="menu">
          <HiOutlineMenuAlt2 size={"1.5rem"} />
        </Link>
        <Link to="/" name="home">
          <HiOutlineHome size={"1.5rem"} />
        </Link>
        <Link to="/cart" name="cart">
          <CiShoppingCart size={"1.5rem"} />
        </Link>
        <Link to="/fav" name="favourites">
          <CiHeart size={"1.5rem"} />
        </Link>
        <Link to="/orders" name="orders">
          <CiDeliveryTruck size={"1.5rem"} />
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
