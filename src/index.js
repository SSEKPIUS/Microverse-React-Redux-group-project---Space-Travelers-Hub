import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';
=======
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './redux/configureStore';
>>>>>>> 20-team3-1pt-create-basic-structure-for-dragons-setup
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 20-team3-1pt-create-basic-structure-for-dragons-setup
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
