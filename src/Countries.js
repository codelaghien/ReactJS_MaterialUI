import React from 'react';
// import './Countries.css';
import { DataGrid } from '@material-ui/data-grid';
// import Moment from 'react-moment';
import moment from 'moment';

class Countries extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{ field: 'Country', headerName: 'Đất nước', width: 250 },
			{ field: 'NewConfirmed', headerName: 'NewConfirmed', width: 150 },
			{
				field: 'TotalConfirmed',
				headerName: 'TotalConfirmed',
				width: 150,
			},
			{ field: 'NewDeaths', headerName: 'NewDeaths', width: 150 },
			{ field: 'formatDate', headerName: 'Ngày', width: 250 },
		];
		this.state = {
			columns: columns,
			rows: [],
			displayData: [],
			selectedCountry: props.selectedCountry,
		};
	}

	static getDerivedStateFromProps(props, state) {
		const displayData = state.rows.filter(
			(data) =>
				data.Country === props.selectedCountry ||
				props.selectedCountry === ''
		);
		return { displayData: displayData };
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		console.log('getData');
		fetch('https://api.covid19api.com/summary')
			.then((res) => res.json())
			.then(
				(data) => {
					// console.log('data', data.Countries);
					let id = 1;
					const dataWithId = data.Countries.map((x) =>
						Object.assign(
							{},
							x,
							{ id: id++ },
							{
								formatDate:
									'Ngày ' +
									moment(x.Date).format('DD/MM/YYYY'),
							}
						)
					);
					// console.log('dataWithId', dataWithId);
					const displayData = [...dataWithId];
					this.setState({
						rows: dataWithId,
						displayData: displayData,
					});
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid
					rows={this.state.displayData}
					columns={this.state.columns}
				/>
			</div>
		);
	}
}

export default Countries;
