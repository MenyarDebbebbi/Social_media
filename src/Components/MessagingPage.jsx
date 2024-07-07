import React, { useState } from "react";
import ChatbotComponent from "./Chatbot";

// Exemple de données utilisateurs
const users = [
  { id: 1, name: "Ouday Fatteh ", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "Menyar Debbebi", avatar: "https://via.placeholder.com/40" },
  {
    id: 3,
    name: "Amen Allah Memich",
    avatar: "https://via.placeholder.com/40",
  },
  { id: 4, name: "Salma Abid", avatar: "https://via.placeholder.com/40" },
  { id: 5, name: "Imen Abid", avatar: "https://via.placeholder.com/40" },
  { id: 6, name: "Charlie Chaplin", avatar: "https://via.placeholder.com/40" },
];

// Exemple de données de messages
const messages = {
  1: [
    { from: "Ouday Fatteh", content: "Bonjour !" },
    { from: "You", content: "Salut, comment ça va ?" },
  ],
  2: [
    { from: "Amen Allah Memich", content: "Hello there!" },
    { from: "You", content: "Hi Bob!" },
  ],
  3: [
    { from: "Charlie Chaplin", content: "Hey!" },
    { from: "You", content: "Hey Charlie!" },
  ],
  4: [
    { from: "Menyar Debbebi", content: "Hey!" },
    { from: "You", content: "Hey Menyar!" },
  ],
  5: [
    { from: "Imen Abid", content: "Hey!" },
    { from: "You", content: "Hey Imen!" },
  ],
  6: [
    { from: "Salma Abid", content: "Hey!" },
    { from: "You", content: "Hey Salma!" },
  ],
};

const MessagingPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="bg-black min-h-screen flex">
      {/* Liste des utilisateurs */}
      <aside className="bg-gray-500 shadow-md w-1/3 p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">Users</h2>
        <ul className="text-white">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center mb-4 cursor-pointer hover:bg-black p-2 rounded"
              onClick={() => setSelectedUser(user.id)}
            >
              <img
                src={user.avatar}
                alt={`Avatar de ${user.name}`}
                className="rounded-full w-10 h-10 mr-3"
              />
              <div>
                <div className="font-semibold">{user.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Zone de discussion */}
      <main className="bg-white shadow-md w-2/3 p-4">
        {selectedUser ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Discussion {users.find((u) => u.id === selectedUser).name}
            </h2>
            <div>
              {messages[selectedUser].map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${msg.from === "You" ? "text-right" : ""}`}
                >
                  <span
                    className={`inline-block px-4 py-2 rounded-lg ${
                      msg.from === "You"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
            </div>
            {/* Interface du Chatbot */}
            <ChatbotComponent />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4"></h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default MessagingPage;
