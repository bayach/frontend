import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.actions";
import { getUsers } from "./actions/users.actions";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';


const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

