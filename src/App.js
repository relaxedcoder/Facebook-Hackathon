import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Body from './components/body/body';
import Header from './components/header/header';



function App() {
  return (
    <div className="App">
      <Header />
      <Body />

      
          <MessengerCustomerChat
            pageId="104558897954522"
            appId="2636712953277947"
          />
    </div>
  );
}


export default App;


