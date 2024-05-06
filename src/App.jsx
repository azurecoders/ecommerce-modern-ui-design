import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
import "./styles/style.scss";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Suspense fallback={<h1 className="main">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
