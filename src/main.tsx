import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(<App />);

window.addEventListener("load", () => {
  document.dispatchEvent(new Event("render-ready"));
});
