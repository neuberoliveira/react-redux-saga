import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { GeneratorsChoice } from './generators-choice/GeneratorsChoice';
import reducer from './generators-choice';

const store = createStore(reducer);

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<h2>Commit generator</h2>
					<GeneratorsChoice />
				</div>
			</Provider>
		);
	}
}

export default App;
