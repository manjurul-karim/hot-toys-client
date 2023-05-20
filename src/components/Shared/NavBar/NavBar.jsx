import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/toys-garden.jpg";
import { authContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user, logedOut } = useContext(authContext);

  const handleLogedOut = () => {
    logedOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className=" bg-[bg-[#1C3F3A]]">
      <Navbar fluid={true} rounded={true}>
        <Link className="flex" to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Hot toys Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hot Toys
          </span>
        </Link>
        <div className="flex md:order-2">
          {/* <Dropdown
            arrowIcon={false}
            inline={true}

            label={

              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"

                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>

            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown> */}

          <Link className="flex gap-2">
            {user ? (
              <>
                <div>
                  <Tooltip content={user.displayName} placement="left">
                    <span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </span>
                  </Tooltip>
                  {/* <div

                    data-tip={user.displayName}
                  >
                    <span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </span>
                  </div> */}
                </div>
                <button onClick={handleLogedOut}>signOut</button>
              </>
            ) : (
              <NavLink
                to="/login"
                // className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </Link>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" active="true">
            Home
          </NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/mytoys">My toys</NavLink>
          <NavLink to="/addtoys">Add a Toys</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
