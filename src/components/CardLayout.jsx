import { CiShoppingCart } from "react-icons/ci";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import keyboard from "../assets/keyboard.jpg";
import glasses from "../assets/glasses.jpeg";
import leatherWatch from "../assets/leatherWatch.jpg";
import mouse from "../assets/mouse.jpg";
import monitor from "../assets/monitor.jpg";

const CardLayout = () => {
  let Products = [
    {
      img: glasses,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: keyboard,
      title: "Black keyboard",
      description: "lorem ipsum dolar",
      price: 70,
    },
    {
      img: watch,
      title: "Apple Watch",
      description: "lorem ipsum dolar",
      price: 990,
    },
    {
      img: mouse,
      title: "Black Mouse",
      description: "lorem ipsum dolar",
      price: 30,
    },
    {
      img: laptop,
      title: "accer laptop",
      description: "lorem ipsum dolar",
      price: 999,
    },
    {
      img: leatherWatch,
      title: "Leather Watch",
      description: "lorem ipsum dolar",
      price: 880,
    },
    {
      img: monitor,
      title: "One plus monitor",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: glasses,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: mouse,
      title: "Mouse",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: leatherWatch,
      title: "leather",
      description: "lorem ipsum dolar",
      price: 40,
    },
  ];
  return (
    <div className="grid">
      {Products.map((e) => (
        <div className="item">
          <img src={e.img} />
          <div className="content">
            <p className="title">{`${e.title}`}</p>
            <p>{e.description}</p>
            <div className="price">
              <p>$40.00</p>
              <CiShoppingCart size={"1.5rem"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
