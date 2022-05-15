import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddItems from "./components/Pages/AddItems/AddItems";
import Blog from "./components/Pages/Blog/Blog";
import Home from "./components/Pages/Home/Home";
import LogIn from "./components/Pages/LogInandRegi/LogIn";
import Register from "./components/Pages/LogInandRegi/Register";
import InventoryTablur from "./components/Pages/ManageInventory/InventoryTablur";
import SingleInventoryItem from "./components/Pages/SingleInventoryItem/SingleInventoryItem";
import Footer from "./components/SharedPages/Footer/Footer";
import Header from "./components/SharedPages/Header/Header";
import NotfoundPage from "./components/SharedPages/NotfoundPage/NotfoundPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MyItems from "./components/Pages/MyItems/MyItems";
import ManageItem from "./components/Pages/ManageItem/ManageItem";
import RequireAuth from "./components/SharedPages/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={<InventoryTablur></InventoryTablur>}
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleInventoryItem></SingleInventoryItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
