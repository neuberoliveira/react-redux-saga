import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { GeneratorsChoice } from './generators-choice/GeneratorsChoice';

const store = createStore({});

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<h2>Commit generator</h2>
				<GeneratorsChoice />
			</Provider>
		);
	}
}

export default App;
