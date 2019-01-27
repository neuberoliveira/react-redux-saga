import types from './types'
import {createReducer} from 'redux-starter-kit'

const initialSatate = {
	selected: null,
	isLoading: false,
	source: null,
	messages: ['Fooo', 'Horray!!!!', 'Bar', 'HAR!']
}

export const commits = createReducer(initialSatate, {
	[types.SET_PICKED_COMMIT]:(state:any, action:any)=>{
		state.selected = action.payload
		return state
	},
	[types.SET_COMMIT_SOURCE]:(state:any, action:any)=>{
		state.source = action.payload
	},
	[types.FETCH_COMMIT]:(state:any)=>{
		state.selected = null
	},
	[types.LOADING]:(state:any, action:any)=>{
		state.isLoading = action.payload
	},
})

const reducer = commits
export default reducer;
