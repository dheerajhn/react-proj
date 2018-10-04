import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import root from "../saga/index";
import rootReducer from "../reducers/index";

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};

// const store = createStore(
//   persistReducer(persistConfig, rootReducer),
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// sagaMiddleware.run(root);

export default store;
export const persistor = persistStore(store);
