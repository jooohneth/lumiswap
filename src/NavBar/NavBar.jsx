import { Link, useLocation } from "react-router-dom";
import Connect from "../components/Connect";

const Navbar = () => {
  return (
    <nav className="bg-white/30 backdrop-blur-[200px] shadow-card">
      <div className="mx-auto py-2 sm:px-6">
        <div className="relative flex h-16 items-center justify-around">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start text-purple-3 font-bold text-3xl">
            <h1 className="font-walsheim">Lumiswap</h1>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mx-auto">
            <li className="list-none">
              <Link
                className={`${
                  useLocation().pathname === "/"
                    ? "text-purple-3"
                    : "text-gray-500"
                } "no-underline p-3 text-sm font-bold "`}
                aria-current="page"
                to={"/"}
              >
                Swap
              </Link>
            </li>
            <li className="list-none">
              <Link
                className={`${
                  useLocation().pathname === "/liquidity"
                    ? "text-purple-3"
                    : "text-gray-500"
                } "no-underline p-3 text-sm font-bold "`}
                aria-current="page"
                to={"/liquidity"}
              >
                Liquidity
              </Link>
            </li>
          </div>
          <Connect></Connect>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
