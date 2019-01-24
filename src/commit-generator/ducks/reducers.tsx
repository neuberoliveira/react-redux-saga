import types from './types'
import { combineReducers } from 'redux'

const initialSatate = {
	selected: null,
	messages:['Fooo', 'Horray!!!!', 'Bar', 'HAR!']
}

export function commits(state=initialSatate, action:any){
	switch(action.type){
		case types.SET_PICKED_COMMIT:
			const ns = Object.assign({}, state, {
				selected: action.message
			})
			return ns
		default:
			return state;
	}
}

const reducer = combineReducers({
	commits
})

export default reducer;
