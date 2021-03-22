import React from 'react';
// import './Countries.css';
import { DataGrid } from '@material-ui/data-grid';

class Countries extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{ field: 'Country', headerName: 'Country', width: 250 },
			{ field: 'NewConfirmed', headerName: 'NewConfirmed', width: 250 },
			{
				field: 'TotalConfirmed',
				headerName: 'TotalConfirmed',
				width: 150,
			},
		];
		this.state = { columns: columns, rows: [] };
	}

	changeSelectedCountry = (event) => {
		//
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		console.log('getData');
		fetch('https://api.covid19api.com/summary')
			.then((res) => res.json())
			.then(
				(data) => {
					console.log('data', data.Countries);
					let id = 1;
					const dataWithId = data.Countries.map((x) =>
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
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid rows={this.state.rows} columns={this.state.columns} />
			</div>
		);
	}
}

export default Countries;
