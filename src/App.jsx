import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="heading heading--green">
        <h1 className="heading__title">
          <a href="/">Web desigin slicing practice with ReactJS</a>
        </h1>
      </div>
      <main className="main main--purple">
        <Outlet />
      </main>
    </>
  );
}

export default App;
