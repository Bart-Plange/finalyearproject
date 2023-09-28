import { useState, useEffect } from 'react';
import axios from 'axios';

// Define a type for your message objects
type MessageType = {
  text: string;
  isUser: boolean;
  isLoading?: boolean; // Add isLoading flag for chatbot response
};

const Chatbot = () => {
  // Initialize the messages state with an empty array of MessageType
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); // Track chat dialog visibility

  // Function to send user message to Dialogflow
  const sendUserMessage = async (message: string) => {
    const apiUrl = 'http://localhost:3000/api/send-message';

    const requestBody = {
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US',
        },
      },
    };

    // Add a loading indicator for chatbot's response
    setMessages([...messages, { text: message, isUser: true }]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: 'Loading...', isUser: false, isLoading: true },
    ]);

    try {
      const response = await axios.post(apiUrl, requestBody);

      const agentResponse = response.data.queryResult.fulfillmentText;
      // Replace the loading indicator with the chatbot's response
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.isLoading
            ? { text: agentResponse, isUser: false }
            : message
        )
      );
    } catch (error) {
      console.error('Error sending message to Dialogflow:', error);
    }
  };

  // Function to handle user input (e.g., when Enter key is pressed)
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      const trimmedInput = userInput.trim();
      if (trimmedInput) {
        setMessages([...messages, { text: trimmedInput, isUser: true }]);
        setUserInput('');

        sendUserMessage(trimmedInput);
      }
    }
  };

  // Function to handle sending a message when the send button is clicked
  const handleSendClick = () => {
    const trimmedInput = userInput.trim();
    if (trimmedInput) {
      setMessages([...messages, { text: trimmedInput, isUser: true }]);
      setUserInput('');

      sendUserMessage(trimmedInput);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      {isChatOpen ? (
        <div className="fixed bottom-0 right-0 w-80 h-96 bg-white shadow-md rounded-lg m-4">
          {/* Chat header */}
          <div className="bg-blue-500 text-white p-2 rounded-t-lg">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">Mr Garage</p>
                <p className="text-sm">Let's Talk About Something</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>

          {/* Chat window */}
          <div
            id="chat-window"
            className="p-4 h-64 overflow-y-auto"
            style={{ background: '#f4f4f4' }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 text-sm p-2 ${
                  message.isUser ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'
                }`}
              >
                {message.isLoading ? (
                  <div className="animate-spin h-4 w-4 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                ) : (
                  message.text
                )}
              </div>
            ))}
          </div>

          {/* Input box and send button */}
          <div className="p-4 border-t border-gray-300 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none"
            />
            <button
              onClick={handleSendClick}
              className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none"
        >
          Open Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;
