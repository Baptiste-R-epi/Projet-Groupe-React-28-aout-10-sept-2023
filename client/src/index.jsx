import React from "react";
import "normalize.css";
import ReactDOM from "react-dom/client";
import "assets/styles/index.css";
import "fonts/Roboto/Roboto-Regular.ttf";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppContext } from "context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="801679952792-3lqqmq1ja41q2bsbsho6d97dgnrhv5m4.apps.googleusercontent.com">
    <React.StrictMode>
        <AppContext />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
