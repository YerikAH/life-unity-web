import { Link } from "react-router-dom";
const CustomLink = ({ text, route }) => {
  return (
    <li className="py-2">
      <Link
        to={route}
        className="px-6 py-2 hidden md:block text-base ease-in-out transition font-medium rounded-md text-gray-500 hover:text-gray-900"
      >
        {text}
      </Link>
    </li>
  );
};
export default CustomLink;
