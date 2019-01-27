import types from './types'
import { createAction } from 'redux-starter-kit';

const setCommit = createAction(types.SET_PICKED_COMMIT)
const setSource = createAction(types.SET_COMMIT_SOURCE)
const fetchCommit = createAction(types.FETCH_COMMIT)
const setLoaderState = createAction(types.LOADING)

export default {
	setCommit,
	setSource,
	fetchCommit,
	setLoaderState,
}