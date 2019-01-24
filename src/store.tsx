import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from "./commit-generator/ducks";
import {commitWorker} from "./commit-generator/ducks";

const sagaMiddleware = createSagaMiddleware()
const reducersCombined = combineReducers({
	generator: reducer,
})

const store = createStore(reducersCombined, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(commitWorker)
export default store