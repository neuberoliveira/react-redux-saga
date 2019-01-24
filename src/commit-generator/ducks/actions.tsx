import types from './types'

const setCommit = (message:string)=>{
	return {
		type: types.SET_PICKED_COMMIT,
		message,
	}
}

export default {
	setCommit,
}