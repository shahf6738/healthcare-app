import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");

      console.log("✅ Service Worker registered:", registration);

      await navigator.serviceWorker.ready;

      console.log("✅ Service Worker ready");

      // Request notification permission
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        new Notification("Welcome 🎉", {
          body: "You have successfully logged in!",
        });
      }
    } catch (err) {
      console.error("❌ SW registration failed:", err);
    }
  });
}