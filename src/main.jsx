import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Wrapper from "./Context/Wrapper";

const root = document.getElementById("root");

ReactDom.createRoot( root ).render(
    <Wrapper>
        <App />
    </Wrapper>
)