import React from 'react';
// import './Countries.css';
import { DataGrid } from '@material-ui/data-grid';
// import Moment from 'react-moment';
import moment from 'moment';

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{
				field: 'firstName',
				headerName: 'Tên',
				width: 150,
			},
			{
				field: 'lastName',
				headerName: 'Họ',
				width: 150,
			},
			{
				field: 'country',
				headerName: 'Quốc gia',
				width: 150,
			},
			{
				field: 'phone',
				headerName: 'Điện thoại',
				width: 150,
			},
			{
				field: 'dob',
				headerName: 'Ngày sinh',
				width: 150,
			},
			{
				field: 'picture',
				headerName: 'Hình',
				width: 150,
			},
		];
		this.state = {
			columns: columns,
			students: [],
			selectedClass: props.selectedClass,
		};
	}

	// static getDerivedStateFromProps(props, state) {
	// 	const displayData = state.rows.filter(
	// 		(data) =>
	// 			data.Country === props.selectedCountry ||
	// 			props.selectedCountry === ''
	// 	);
	// 	return { displayData: displayData };
	// }

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		console.log('getData');
		fetch('https://randomuser.me/api/?results=5')
			.then((res) => res.json())
			.then(
				(data) => {
					console.log('data', data.results);
					let id = 1;
					const dataWithId = data.results.map((record) => {
						return {
							id: id++,
							firstName: record.name.first,
							lastName: record.name.last,
							country: record.location.country,
							phone: record.phone,
							dob: moment(record.dob.date).format('DD/MM/YYYY'),
							picture: record.picture.thumbnail,
						};
					});
					console.log('dataWithId', dataWithId);
					this.setState({
						students: dataWithId,
					});
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		const displayStudents = [...this.state.students];
		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid rows={displayStudents} columns={this.state.columns} />
			</div>
		);
	}
}

export default MyClass;
