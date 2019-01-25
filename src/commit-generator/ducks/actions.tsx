import types from './types'

const setCommit = (message:string)=>{
	return {
		type: types.SET_PICKED_COMMIT,
		message,
	}
}
const setSource = (source:string)=>{
	return {
		type: types.SET_COMMIT_SOURCE,
		source,
	}
}

const fetchCommit = ()=>{
	return {
		type: types.FETCH_COMMIT,
	}
}

const setLoaderState = (loading:boolean)=>{
	return {
		type: types.LOADING,
		isLoading: loading
	}
}

export default {
	setCommit,
	setSource,
	fetchCommit,
	setLoaderState,
}