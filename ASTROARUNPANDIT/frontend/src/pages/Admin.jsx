import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-400 text-white p-6">
        <ul>
          {/* Dashboard Link */}
          <li>
            <Link to="dashboard" className="py-2 px-4 block hover:bg-gray-300">
              Dashboard
            </Link>
          </li>

          {/* About Link with Hover Dropdown */}
          <li className="relative group">
            <Link
              to="#"
              className="py-2 px-4 block w-full text-left hover:bg-gray-300 transition duration-300"
            >
              About
            </Link>

            {/* Dropdown Menu for About */}
            <ul className="absolute left-0 top-8 hidden group-hover:block transition duration-300 bg-gray-300 mt-2 w-full">
              <li>
                <Link
                  to="about/about-content"
                  className="py-2 px-4 block hover:bg-gray-600"
                >
                  About Content
                </Link>
              </li>
              <li>
                <Link
                  to="about/our-motto"
                  className="py-2 px-4 block hover:bg-gray-600"
                >
                  Our Motto
                </Link>
              </li>
              <li>
                <Link
                  to="about/who-believes-us"
                  className="py-2 px-4 block hover:bg-gray-600"
                >
                  Who Believes Us
                </Link>
              </li>
              <li>
                <Link
                  to="about/why-astro-arun"
                  className="py-2 px-4 block hover:bg-gray-600"
                >
                  Why Astro Arun
                </Link>
              </li>
            </ul>
          </li>

          {/* Add more links for other sections here */}
        </ul>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 overflow-auto">
        {location.pathname === "/admin" ? (
          <div className="text-center content-center h-full">
            <h1 className="text-black text-5xl mb-10">
              Welcome to Admin Panel
            </h1>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
