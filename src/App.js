import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
 
  const isloggedIn = useSelector ((state)=> state.auth.isLoggedIn)
  console.log(isloggedIn)
  const cart = useSelector((state) => state.cart)
  return (
    <div className="App">
      {!isloggedIn && <Auth />}
      {isloggedIn && <Layout />}
    </div>
  );
}

export default App;
