import actions from './actions'
import store from 'src/store';

// const toogleGenerator = actions.toogleGenerator
const pickLocal = ()=>{
	const {messages} = store.getState().generator.commits
	const picked = messages[1]	
	store.dispatch(actions.setCommit(picked))
}

export default {
	pickLocal,
}