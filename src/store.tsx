import { /* createStore, */ combineReducers, /* compose, */ /* applyMiddleware */} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {configureStore} from 'redux-starter-kit'
import {commitReducers, commitWorker } from "./commit-generator/ducks";

const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__']
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
	commitReducers,
})

let middlewares:any[] = [sagaMiddleware]
if(reduxDevTools){
	// middlewares = [...middlewares, reduxDevTools]
}
const store = configureStore({
	reducer: rootReducer,
	middleware: middlewares,
})

sagaMiddleware.run(commitWorker)
export default store
