import React from "react";

const posts = [
  {
    id: 1,
    userName: "Nom Utilisateur 1",
    time: "Il y a 2 heures",
    content: "فرصة لشباب تونس : تطوير منصات اجتماعية باستخدام React JS ",
    avatar: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    id: 2,
    userName: "Nom Utilisateur 2",
    time: "Il y a 3 heures",
    content:
      "Earn a Master's Degree in Computer Science with a FULL-TIME PAID INTERNSHIP with major companies in the USA. A computer science degree or related subject and work experience as a software developer is required.",
    avatar: "https://picsum.photos/id/1019/1000/600/",
  },
  // Ajoutez plus de publications ici
];

const PostList = () => {
  return (
    <div className="bg-white py-4 px-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Publications</h3>
      {posts.map((post) => (
        <div className="mb-4" key={post.id}>
          <div className="flex items-center mb-2">
            <img
              src={post.avatar}
              alt="Avatar"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div>
              <div className="font-semibold">{post.userName}</div>
              <div className="text-gray-600">{post.time}</div>
            </div>
          </div>
          <p className="text-gray-700 mb-2">{post.content}</p>
          <div className="flex space-x-4">
            <button className="text-blue-500 hover:underline">Aimer</button>
            <button className="text-blue-500 hover:underline">Commenter</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
