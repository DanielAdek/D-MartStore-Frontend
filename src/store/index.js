import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

let composeEnhancers = compose;
if (process.env.NODE_ENV === "development") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const middleware = [thunk];

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
