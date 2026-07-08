import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router";
import { L1ListComponent } from "./l1-list/l1-list.component.jsx";
import NotFoundPage from "./not-found/not-found.page.jsx";
import HomePage from "./home/home.page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="/l1-list"
            element={<L1ListComponent path="/l1-list" />}
          />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/*" element={<Navigate replace to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
