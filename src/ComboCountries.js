import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

class ComboCountries extends React.Component {
	constructor(props) {
		super(props);
		const useStyles = makeStyles((theme) => ({
			formControl: {
				margin: theme.spacing(1),
				minWidth: 200,
			},
			selectEmpty: {
				marginTop: theme.spacing(2),
			},
		}));
		const columns = [
			{ field: 'Country', headerName: 'Country', width: 250 },
			{ field: 'Slug', headerName: 'Slug', width: 250 },
			{ field: 'ISO2', headerName: 'ISO2', width: 150 },
		];
		this.state = {
			columns: columns,
			rows: [],
			useStyles: useStyles,
			selectedCountry: '',
		};
	}

	componentDidMount() {
		this.getData();
	}

	handleChange = (event) => {
		console.log('chọn: ', event.target.value);
		this.setState({ selectedCountry: event.target.value });
	};

	getData = () => {
		console.log('getData');
		fetch('https://api.covid19api.com/countries')
			.then((res) => res.json())
			.then(
				(data) => {
					// console.log('result', data);
					let id = 1;
					const dataWithId = data.map((x) =>
						Object.assign({}, x, { id: id++ })
					);
					// console.log('dataWithId', dataWithId);
					this.setState({ rows: dataWithId });
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				<FormControl className={this.state.useStyles.formControl}>
					<InputLabel
						id='demo-simple-select-label'
						style={{ color: 'white' }}
					>
						Country
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						style={{ minWidth: 200 }}
						value={this.state.selectedCountry}
						onChange={this.handleChange}
					>
						{this.state.rows.map((value, index) => {
							return (
								<MenuItem value={value.Country}>
									{value.Country}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</div>
		);
	}
}

export default ComboCountries;
