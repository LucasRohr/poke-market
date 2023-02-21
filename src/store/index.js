import { createStore, applyMiddleware } from "redux";

let store;

export default class Store {
  static create(reducers, middlewares) {
    store = createStore(reducers, applyMiddleware(...middlewares));
  }

  static getStore() {
    return store;
  }
}
