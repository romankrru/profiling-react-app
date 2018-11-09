import React, { Component } from 'react';
import './App.css';
import FlameChart from './FlameChart';
import AutoSizer from 'react-virtualized-auto-sizer';

class App extends Component {
	state = {
		data: null,
	}

	loadData = () => {
		fetch('./data.json')
			.then(r => r.json())
			.then(data => this.setState({data: data}))
	}

	render() {
		if (!this.state.data)
			return <button onClick={this.loadData}>Load data</button>

		return (
			<div className="App">
				<AutoSizer>
					{({height, width}) => (
						<FlameChart
							width={width}
							height={height}
							data={this.state.data}
						/>
					)}
				</AutoSizer>
			</div>
		)
	}
}

export default App;
