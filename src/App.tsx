import * as React from 'react';
import { connect } from "react-redux";

import "./App.css";
import Header from "./componets/Header";
import CommitGenerator from './commit-generator/CommitGenerator';
import { bindActionCreators } from 'redux';

const App = ()=>(
	<div className="App">
		<Header />
		<CommitGenerator />
	</div>
)

// container part
function mapStateToProps(state:any) {
	// console.log('map state to props', state)
    return {}
}

function mapDispatchToProps(dispatch:any) {
    return bindActionCreators({
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);