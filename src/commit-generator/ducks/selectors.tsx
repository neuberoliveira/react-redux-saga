import createSelector from "selectorator";

const getCommits = createSelector(
	['commitReducers'],
	(commits)=>commits
)

export default {
	getCommits
}