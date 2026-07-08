import { NavLink, useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  function navigateToNotFoundPage() {
    navigate("/not-found");
  }
  return (
    <>
      <div>
        <a
          href="
                  https://arc.net/folder/B4B22D05-901D-44DB-BF03-0B85E3FB617F 
                  "
          className="home--link"
        >
          Link to design
        </a>
        <nav>
          <ul className="text-2xl px-[40px] *:*:w-full *:*:inline-block *:hover:bg-green-100 *:h-[50px] *:*:p-[10px]">
            <li>
              <NavLink to={"/"} className="w-full">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/l1-list"}>Lesson 1: List</NavLink>
            </li>
            <li>
              <button onClick={navigateToNotFoundPage}>
                Go to not found page
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
