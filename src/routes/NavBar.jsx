import { NavLink } from "react-router-dom";

// Navigation bar component with links to different routes
export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link_active" : "nav_link"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-event"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link_active" : "nav_link"
              }
            >
              New Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link_active" : "nav_link"
              }
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav_link nav_link_active" : "nav_link"
              }
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
