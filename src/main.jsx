import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.styles.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context.jsx";
import { ShopProvider } from "./context/shop.context.jsx";
import { CartProvider } from "./context/cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
