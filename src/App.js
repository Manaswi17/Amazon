import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { productData } from "./api/api";
import Footer from "./components/header/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Layout =()=>{
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productData}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;