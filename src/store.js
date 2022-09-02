import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { includeMeaningOfLife, sayHiOnDispatch } from "./exampleAddons/enhancers";
import { print1, print2, print3 } from "./exampleAddons/middleware";
import rootReducer from './reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')
if (persistedTodosString) {
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}
const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3),
    sayHiOnDispatch,
    includeMeaningOfLife
)
const store = createStore(rootReducer, composedEnhancer)

export default store