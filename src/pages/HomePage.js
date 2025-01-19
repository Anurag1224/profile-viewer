import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "../style/homePage.css";

const HomePage = () => {

  const location = useLocation();
  const isHomePath = location.pathname === "/";

  const navigate = useNavigate();
  const navigateToUserPage = () => {
    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex flex-col items-center justify-center text-gray-800">
      <nav className="absolute top-0 left-0 w-full p-6 ">
  
        <div className="relative group">
          <button className="text-3xl focus:outline-none">☰</button>
          <div className="absolute left-0 mt-2 hidden group-focus-within:block bg-white text-gray-700 rounded-lg shadow-lg w-36">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <Link to="/admin" className="hover:text-indigo-500">
                  Admin
                </Link>
              </li>
              <li>
                {isHomePath? (<Link to="/users" className="hover:text-indigo-500">
                  User
                </Link>):(<Link to="/" className="hover:text-indigo-500">
                  Home
                </Link>)}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isHomePath ? (
        <div className="text-center mt-12">
          <h1 className="text-5xl font-bold mb-6 text-indigo-700 animate-fade-in">
            Welcome to Profile Viewer
          </h1>
          <p className="text-lg mb-8 text-gray-600 animate-slide-in">
            Seamlessly manage and explore user profiles.
          </p>
          <button
            onClick={navigateToUserPage}
            className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:scale-105 duration-300"
          >
            Go to User Page
          </button>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default HomePage;
