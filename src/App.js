import React from 'react';
import MyAppBar from './MyAppBar';
import MyContent from './MyContent';

class App extends React.Component {
	render() {
		return (
			<div>
				<MyAppBar />
				<br />
				<MyContent />
			</div>
		);
	}
}

export default App;
