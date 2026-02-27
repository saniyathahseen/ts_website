import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Dynamically set CSS variable --navbar-height to match the rendered navbar height
function syncNavbarHeight() {
  try {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const h = nav.getBoundingClientRect().height + 'px';
    document.documentElement.style.setProperty('--navbar-height', h);
  } catch (e) {
    // ignore in environments without DOM
  }
}

// Sync on load and resize; also attempt again shortly after render to catch layout changes
window.addEventListener('resize', syncNavbarHeight);
window.addEventListener('load', () => setTimeout(syncNavbarHeight, 50));
setTimeout(syncNavbarHeight, 500);
