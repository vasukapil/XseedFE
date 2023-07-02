import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';



const ChatbotApp = () => {
  return (
    <div style={{position : "fixed" ,right : "0px",bottom : "4px",height:"200px",width:"auto",background:"#ffffff",zIndex:"999",overflow:"auto",border:"2px solid #000000"}}>
      <Chatbot config={config} 
       messageParser={MessageParser}
       actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotApp;
