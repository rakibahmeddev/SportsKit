import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/SharedPages/Footer/Footer";
import Header from "./components/SharedPages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import NotfoundPage from "./components/SharedPages/NotfoundPage/NotfoundPage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
