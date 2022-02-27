//React
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.getElementById("root");
//     const store = configureStore();
//     ReactDOM.render(<h1>Welcome to OurTube....but youre not supposed to see this...</h1>, root);
//     window.getState = store.getState;
//     window.dispatch = store.dispatch;
//   });