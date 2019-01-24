import * as React from 'react';
import Header from "./componets/Header";
import CommitGenerator from './commit-generator/CommitGenerator';

const EntryPoint = ()=>(
	<div className="App">
		<Header />
		<CommitGenerator />
	</div>
)

export default EntryPoint