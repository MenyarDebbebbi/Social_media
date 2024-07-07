import React, { useState } from "react";

const ActivityFeed = () => {
  const [sortOption, setSortOption] = useState("recent");

  const posts = [
    {
      id: 1,
      user: "User1",
      content: "This is a recent post by User1",
      category: "Technology",
      popularity: 50,
      timestamp: "2024-07-07T10:00:00Z",
    },
    {
      id: 2,
      user: "User2",
      content: "This is a popular post by User2",
      category: "Health",
      popularity: 100,
      timestamp: "2024-07-06T09:00:00Z",
    },
    // Add more posts here
  ];

  const sortedPosts = posts.sort((a, b) => {
    if (sortOption === "recent") {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortOption === "popular") {
      return b.popularity - a.popularity;
    } else if (sortOption === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Fil d'actualités</h2>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              sortOption === "recent"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSortOption("recent")}
          >
            Récent
          </button>
          <button
            className={`px-4 py-2 rounded ${
              sortOption === "popular"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSortOption("popular")}
          >
            Populaire
          </button>
          <button
            className={`px-4 py-2 rounded ${
              sortOption === "category"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSortOption("category")}
          >
            Catégorie
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{post.user}</h3>
              <span className="text-sm text-gray-500">
                {new Date(post.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{post.content}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">{post.category}</span>
              <span className="text-sm text-gray-500">
                Popularité : {post.popularity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
