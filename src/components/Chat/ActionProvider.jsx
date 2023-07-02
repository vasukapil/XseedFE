import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGreeting = () => {
    const message = createChatBotMessage("Hello! How can I assist you today?");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleHelp = () => {
    const message = createChatBotMessage("How can I help you?");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreeting,
            handleHelp,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
