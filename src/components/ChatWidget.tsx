import { Widget, addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const ChatWidget = () => {
  const handleNewUserMessage = async (newMessage: unknown) => {
    const messageToSend = {
      message: newMessage,
    };

    try {
      const response = await fetch('http://localhost:3000/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageToSend),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.message;
        addResponseMessage(botResponse);
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Mr Garage Bot"
      subtitle="Ask me anything!🤝"
    />
  );
};

export default ChatWidget;