import actions from './actions'
import store from 'src/store';

// const toogleGenerator = actions.toogleGenerator
const pickLocal = ()=>{
	const {messages} = store.getState().generator.commits
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