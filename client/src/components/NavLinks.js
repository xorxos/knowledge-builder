import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const NavLinks = ({ toggleSidebar }) => {
  const { clearValues } = useAppContext();

  const handleClick = () => {
    toggleSidebar();
    clearValues();
  };

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            end
            key={id}
            onClick={handleClick}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
