import { createStore, combineReducers } from 'redux'
import reducer from "./commit-generator/ducks";

const reducersCombined = combineReducers({
	generator: reducer,
})

const store = createStore(reducersCombined)
export default store