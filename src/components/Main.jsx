import CardLayout from "./CardLayout";
import Categories from "./Categories";
import Header from "./Header";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <Categories />
      <CardLayout />
    </div>
  );
};

export default Main;
