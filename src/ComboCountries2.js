import React from 'react';
import Select from 'react-dropdown-select';

class ComboCountries2 extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{ field: 'Country', headerName: 'Country', width: 250 },
			{ field: 'Slug', headerName: 'Slug', width: 250 },
			{ field: 'ISO2', headerName: 'ISO2', width: 150 },
		];
		this.state = {
			columns: columns,
			rows: [],
			selectedCountry: '',
		};
	}

	componentDidMount() {
		this.getData();
	}

	handleChange = (event) => {
		console.log('chọn: ', event);
		// this.setState({ selectedCountry: event.target.value });
	};

	getData = () => {
		console.log('getData');
		fetch('https://api.covid19api.com/countries')
			.then((res) => res.json())
			.then(
				(data) => {
					// console.log('result', data);
					let id = 1;
					this.setState({ rows: data.map((d) => d.Country) });
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		return (
			<div style={{ minWidth: 200 }}>
				<Select
					options={[]}
					values={this.state.rows}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default ComboCountries2;
