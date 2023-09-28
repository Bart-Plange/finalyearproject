import React, { useEffect } from 'react';

const DialogflowChatbot = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src =
      'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;

    // Set attributes for the Dialogflow Messenger
    script.setAttribute('intent', 'WELCOME');
    script.setAttribute('chat-title', 'garage-automobile');
    script.setAttribute(
      'agent-id',
      'e010addc-d8d7-4b3a-ac55-76ea58a6c982'
    );
    script.setAttribute('language-code', 'en');

    // Append the script to the document's body
    document.body.appendChild(script);

    // Clean up the script element on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="df-root"></div>;
};

export default DialogflowChatbot;
