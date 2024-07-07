class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  // Define your chatbot actions here
  greet() {
    const message = this.createChatbotMessage("Hello, friend.");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    // This function adds the message to the messages state
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
