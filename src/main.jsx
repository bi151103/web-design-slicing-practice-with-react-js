import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { L1ListComponent } from "./l1-list/l1-list.component.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <>
                <div index>
                  <a
                    href="
                  https://arc.net/folder/B4B22D05-901D-44DB-BF03-0B85E3FB617F 
                  "
                    className="home--link"
                  >
                    Link to design
                  </a>
                </div>
              </>
            }
          />
          <Route
            path="/l1-list"
            element={<L1ListComponent path="/l1-list" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
