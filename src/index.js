import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Header from './Layout/Header.js'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Header />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)