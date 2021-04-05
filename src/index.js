import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from 'redux-saga'
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from 'redux-thunk'
import { forbiddenWordsMiddleware } from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, forbiddenWordsMiddleware,saga));

saga.run(sagaWatcher)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
