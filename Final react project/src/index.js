import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Contextapi/Productcontext";
import { FilterContextProvider } from "./Contextapi/FilterContext";
import { CartProvider } from "./Contextapi/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
            <Auth0Provider
    domain="dev-ixqvg71fbw7pkdyd.us.auth0.com"
    clientId="xDw21wncTwexdlhsvy0rl1PoXyXRLCdk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
                <App />
                </Auth0Provider>
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>
    
);

reportWebVitals();
