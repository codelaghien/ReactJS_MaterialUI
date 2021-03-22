import React from 'react';
import MyAppBar from './MyAppBar';
// import MyContent from './MyContent';
import Countries from './Countries';

class App extends React.Component {
	constructor() {
		super();
		this.state = { selectedCountry: '' };
	}

	handleCountryChange = (country) => {
		console.log('App chọn: ', country);
		this.setState({ selectedCountry: country });
	};

	render() {
		return (
			<div>
				<MyAppBar handleCountryChange={this.handleCountryChange} />
				<br />
				<Countries selectedCountry={this.state.selectedCountry} />
			</div>
		);
	}
}

export default App;
