import React from 'react';
// import './Countries.css';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

class Countries extends React.Component {
	constructor(props) {
		super(props);
		// const rows = [
		// 	{ id: 1, col1: 'Hello', col2: 'World' },
		// 	{ id: 2, col1: 'XGrid', col2: 'is Awesome' },
		// 	{ id: 3, col1: 'Material-UI', col2: 'is Amazing' },
		// ];

		// const columns = [
		// 	{ field: 'col1', headerName: 'Column 1', width: 150 },
		// 	{ field: 'col2', headerName: 'Column 2', width: 150 },
		// ];
		// this.state = { rows: rows, columns: columns };

		const columns = [
			{ field: 'Country', headerName: 'Country', width: 250 },
			{ field: 'Slug', headerName: 'Slug', width: 250 },
			{ field: 'ISO2', headerName: 'ISO2', width: 150 },
		];
		this.state = { columns: columns, rows: [] };
	}

	componentDidMount() {
		this.getData();
	}

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
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid rows={this.state.rows} columns={this.state.columns} />
			</div>
		);
	}
}

export default Countries;
