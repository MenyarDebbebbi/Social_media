class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    // Add your message parsing logic here
    // For example, you can use conditionals to route the message to different actionProvider methods
  }
}

export default MessageParser;
