// src/components/config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "",
  initialMessages: [
    createChatBotMessage(`Bonjour! Comment puis-je vous aider aujourd'hui ?`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F4F4F4",
    },
    chatButton: {
      backgroundColor: "#0084FF",
    },
  },
};

export default config;
