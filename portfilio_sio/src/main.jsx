import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./reset.css";
import NoMatch from "./pages/error/NoMatch.jsx";
import Parcouurs from "../src/pages/parcours/Parcours.jsx";
import Situations_pro from "./pages/situations_pro/Situations_pro.jsx";
import Veille_juridique from "./pages/veille_juridique/Veille_juridique.jsx";
import Veille_technologique from "./pages/veille_technologique/Veille_technologique.jsx";
import store from "../src/store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/parcours",
    element: <Parcouurs />,
  },
  {
    path: "/situations_pro",
    element: <Situations_pro />,
  },
  {
    path: "/veille_juridique",
    element: <Veille_juridique />,
  },
  {
    path: "/veille_technologique",
    element: <Veille_technologique />,
  },
  {
    path: "*",
    element: <NoMatch status={404} />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Could not find root element");
}
