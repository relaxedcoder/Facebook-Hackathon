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
            pageId="108266287590346"
            appId="943996966049788"
          />
    </div>
  );
}


export default App;
