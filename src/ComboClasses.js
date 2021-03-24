import React from 'react';
// import style from './ComboClasses.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class ComboClasses extends React.Component {
	constructor(props) {
		super(props);
		const columns = [{ field: 'Class', headerName: 'Class', width: 250 }];
		this.state = {
			columns: columns,
			data: [
				{ year: 2020, name: 'Lớp 12 A1' },
				{ year: 2021, name: 'Lớp 11 A8' },
			],
			selectedClass: '',
		};
	}

	handleChange = (event) => {
		console.log('chọn lớp: ', event.target.value);
		this.setState({ selectedClass: event.target.value });
	};

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				<Autocomplete
					id='combo-box-lop'
					size='small'
					options={this.state.data}
					getOptionLabel={(option) => option.name}
					style={{
						background: 'white',
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label=''
							variant='outlined'
							placeholder='Chọn lớp'
						/>
					)}
				/>
			</div>
		);
	}
}

export default ComboClasses;
