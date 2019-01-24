import { call, put, takeLatest } from 'redux-saga/effects'
import types from './types'
import actions from './actions'


function* commitWorker() {
	yield takeLatest(types.FETCH_COMMIT, fetchCommit);
}

function* fetchCommit() {
	try {
		const apiCall = ()=>fetch('https://helloacm.com/api/cowsay/?msg=CowSay&f=dragon').then((resp)=>resp.json())
		const commit = yield call(apiCall);
		// yield put({ type: types.COMMIT_FETCH_SUCCEEDED});
		yield put(actions.setCommit(commit));
	} catch (e) {
		yield put({ type: types.COMMIT_FETCH_FAIL, message: e.message });
	}
}


export default commitWorker