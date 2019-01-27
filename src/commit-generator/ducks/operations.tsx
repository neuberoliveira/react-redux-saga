import actions from './actions'
import store from 'src/store';
import {commitSelectors} from 'src/commit-generator/ducks';

// const toogleGenerator = actions.toogleGenerator
const pickLocal = ()=>{
	const {messages} = commitSelectors.getCommits(store.getState())
	const index = Math.floor(Math.random() * (messages.length - 0) + 0);
	const picked = messages[index]
	store.dispatch(actions.setSource('local'))
	store.dispatch(actions.setCommit(picked))
}
const pickOnline = ()=>{
	store.dispatch(actions.fetchCommit())
	store.dispatch(actions.setSource('online'))
}

export default {
	pickLocal,
	pickOnline,
}