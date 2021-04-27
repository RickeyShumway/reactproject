import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { TopBar, MainContent, ListItem} from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
// <TopBar />,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
   <Router>
    <TopBar />
    <MainContent />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
