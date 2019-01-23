import * as types from './types'
import { combineReducers } from 'redux'

let initialSatate = {}
export function generatorChoice(state=initialSatate, action:any){
	switch(action.type){
		case types.TOGGLE_GENERATOR:
			return Object.assign({}, state, {
				visibleGenerator: action.generator
			})
		default:
			return state;
	}
}

const reducer = combineReducers({
	generatorChoice
})

export default reducer;