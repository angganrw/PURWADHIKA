import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICount } from "../Redux/userSlice";

function Header() {
  const count = useSelector(
    (state: { userSlice: ICount }) => state.userSlice.value
  );
  return (
    <nav className="bg-[#37373a] text-white p-4">
      <h1 className="text-2xl font-bold">
        ANGGA NIRWANA - NETWORK CALL PRACTICE
      </h1>
      <ul className="flex space-x-4 mt-2">
        <li>
          <Link to="/" className="hover:text-gray-300 mr-4">
            Users
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-300 mr-96">
            Register
          </Link>
        </li>

        <li className="hover:text-gray-300">
          User Count : {count} (masiherror){" "}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
