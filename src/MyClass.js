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
			newStudent: [],
			selectedClass: props.selectedClass,
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log(
			'MyClass getDerivedStateFromProps',
			props.className,
			props.newStudent
		);
		return { selectedClass: props.className, newStudent: props.newStudent };
	}

	// componentDidMount() {
	// 	// this.getData();
	// }

	render() {
		console.log('MyClass render', this.state.selectedClass);
		const displayStudents = [...this.state.students];
		// const displayData = state.students.filter(
		// 	(data) =>
		// 		data.class === props.selectedClass ||
		// 		props.selectedClass === ''
		// );
		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid rows={displayStudents} columns={this.state.columns} />
			</div>
		);
	}
}

export default MyClass;
