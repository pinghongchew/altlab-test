import React from 'react';
import ReactDOM from 'react-dom';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';
// import iconLogo from "./asset/1.jpeg";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Alt Burger - NFT Collection</title>
      {/* <link rel="icon" href={iconLogo} /> */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&family=DM+Sans:wght@700&family=Righteous&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Helmet>
    <Router>
      <Switch>
        <Route path="/burger">
          <App />
        </Route>
        <Route path="/">
          <Redirect to="/burger" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
