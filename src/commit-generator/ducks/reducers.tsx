import types from './types'
import { combineReducers } from 'redux'

const initialSatate = {
	selected: null,
	source: null,
	messages: ['Fooo', 'Horray!!!!', 'Bar', 'HAR!']
}

export function commits(state = initialSatate, action: any) {
	switch (action.type) {
		case types.SET_PICKED_COMMIT:
			return Object.assign({}, state, {
				selected: action.message
			})
		case types.SET_COMMIT_SOURCE:
			return Object.assign({}, state, {
				source: action.source
			})
		case types.FETCH_COMMIT:
			return Object.assign({}, state, {
				selected: null
			})
		default:
			return state;
	}
}

const reducer = combineReducers({
	commits
})

export default reducer;
