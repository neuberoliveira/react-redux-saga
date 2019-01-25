import { call, put, takeLatest } from 'redux-saga/effects'
import types from './types'
import actions from './actions'


function* commitWorker() {
	yield takeLatest(types.FETCH_COMMIT, fetchCommit);
}

function* fetchCommit() {
	yield put(actions.setLoaderState(true));
	try {
		const apiCall = ()=>fetch('https://helloacm.com/api/cowsay/?msg=DragonSay&f=dragon').then((resp)=>resp.json())
		const commit = yield call(apiCall);
		// yield put({ type: types.COMMIT_FETCH_SUCCEEDED});
		yield put(actions.setLoaderState(false));
		yield put(actions.setCommit(commit));
	} catch (e) {
		yield put(actions.setLoaderState(false));
	}
}


export default commitWorker