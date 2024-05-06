import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiHeart, CiDeliveryTruck } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <HiOutlineMenuAlt2 size={"1.5rem"} />
        </li>
        <li>
          <HiOutlineHome size={"1.5rem"} />
        </li>
        <li>
          <CiShoppingCart size={"1.5rem"} />
        </li>
        <li>
          <CiHeart size={"1.5rem"} />
        </li>
        <li>
          <CiDeliveryTruck size={"1.5rem"} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
