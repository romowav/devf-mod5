import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Menu from "./comp-celulares/menu/menu";
import Footer from "./comp-celulares/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from "./comp-celulares/productos/Productos";




ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Menu></Menu>
        <Productos></Productos>
        <Footer className="footer"></Footer>
    </React.StrictMode>,
);
