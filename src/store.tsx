import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {commitReducers, commitWorker, } from "./commit-generator/ducks";

const sagaMiddleware = createSagaMiddleware()
const reducersCombined = combineReducers({
	generator: commitReducers,
})

const store = createStore(reducersCombined, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(commitWorker)
export default store