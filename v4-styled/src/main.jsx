import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, sans-serif; color: #1f2937; background: #f9fafb; }
`;
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Global />
    <App />
  </BrowserRouter>
);
