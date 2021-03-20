import React from 'react';
import MyAppBar from './MyAppBar';
// import MyContent from './MyContent';
import Countries from './Countries';

class App extends React.Component {
	render() {
		return (
			<div>
				<MyAppBar />
				<br />
				<Countries />
			</div>
		);
	}
}

export default App;
