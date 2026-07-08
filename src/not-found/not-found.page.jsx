import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <div className="w-screen h-screen bg-primary-bg">
        <h1 className="w-fit mx-auto leading-[3]">
          Not found -{"> "}
          <NavLink to="/" className="text-red-500">
            Home
          </NavLink>
        </h1>
      </div>
    </>
  );
}
