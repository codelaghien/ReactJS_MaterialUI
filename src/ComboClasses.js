import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

class ComboClasses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedClass: '',
		};
	}

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				Hello
				{/* <Autocomplete
					id='combo-box-demo'
					options={[]}
					getOptionLabel={(option) => option.title}
					style={{ width: 300 }}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Combo box'
							variant='outlined'
						/>
					)}
				/> */}
			</div>
		);
	}
}

export default ComboClasses;
