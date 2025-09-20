import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4  w-full top-0 fixed">
      <div className="w-fit mx-auto px-4">
        <div className="flex space-x-4">
        <NavLink
            to="/"
            active={location.pathname === "/"}
          >
            Home
          </NavLink>
            about
          <NavLink
            to="/GeneralContact"
            active={location.pathname === "/GeneralContact"}
          >
            General Contact
          </NavLink>
          <NavLink
            to="/ServiceRequest"
            active={location.pathname === "/ServiceRequest"}
          >
            Service Request
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink component to handle active state
interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-white hover:text-gray-300 ${active ? "underline" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navigation;
