import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <section className="absolute flex items-center justify-between w-full p-3">
        <Link to="/">
          <h1 className="uppercase text-red-600 md:text-5xl text-3xl ">
            netflix
          </h1>
        </Link>
        <article>
          <Link to="/login">
            <span className="text-white px-2 md:text-lg text-md font-semibold">
              Login
            </span>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white rounded-sm px-2 py-1 md:text-lg font-semibold text-md ">
              Sign Up
            </button>
          </Link>
        </article>
      </section>
    </>
  );
};
export default NavBar;
