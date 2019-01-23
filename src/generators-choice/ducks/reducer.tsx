import * as types from './types'

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