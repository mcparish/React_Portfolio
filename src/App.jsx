import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import { Outlet } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
