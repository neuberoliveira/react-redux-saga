import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store'
import EntryPoint from './EntryPoint';

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<EntryPoint />
			</Provider>
		);
	}
}

export default App;
