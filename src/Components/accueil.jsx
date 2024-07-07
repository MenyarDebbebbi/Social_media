import React from "react";
import PostList from "./Post";
import Story from "./Story";
const App = () => {
  return (
    <div className="bg-violet-300 min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4 mr-4">
          <h2 className="text-xl font-semibold mb-4">Options</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Option 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Option 2
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Option 3
              </a>
            </li>
          </ul>
        </aside>

        {/* Feed */}
        <section className="w-3/4">
          {/* Stories Carousel */}
          <Story />

          {/* Post Creation */}
          <div className="bg-white py-4 px-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Créer une publication
            </h3>
            <textarea
              className="w-full border rounded p-2 mb-4"
              placeholder="Quoi de neuf ?"
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Publier
            </button>
          </div>

          {/* Feed Posts */}
          <PostList />
        </section>
      </div>
    </div>
  );
};

export default App;
