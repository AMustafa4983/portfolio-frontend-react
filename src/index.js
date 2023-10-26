import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter } from "react-router-dom";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cursor isGelly={true} cursorBackgrounColor='#D7BBF5' cursorSize={30}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
