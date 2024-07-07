import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/accueil";
import Flux from "./Components/Flux";
import Messages from "./Components/MessagingPage";
const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-8" />
              <h1 className="text-xl font-semibold ml-2">VIBE</h1>
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Search .. "
                className="px-10 ml-2 rounded-full "
              />{" "}
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/activity"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Flux d'activité
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">
                    Profils
                  </Link>
                </li>
                <li>
                  <Link
                    to="MessagingPage"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Messages
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Flux />} />
          <Route path="/MessagingPage" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
