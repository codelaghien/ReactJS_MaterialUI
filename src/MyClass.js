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

	static getDerivedStateFromProps(props, state) {
		// console.log(
		// 	'MyClass getDerivedStateFromProps',
		// 	props.className,
		// 	props.newStudent
		// );
		let totalStudents = 0;
		if (!props.className || props.className === '') {
			totalStudents = state.students.length;
		} else {
			let displayStudents = [...state.students];
			displayStudents = displayStudents.filter(
				(data) => data.className === props.className
			);
			totalStudents = displayStudents.length;
		}
		if (props.className && props.newStudent) {
			const students = state.students;
			const newStudent = props.newStudent;
			newStudent.id = students.length + 1;
			newStudent.className = props.className;
			// console.log('MyClass newStudent', newStudent);

			students.push(newStudent);
			++totalStudents;
			// console.log('MyClass handleTotalStudents', totalStudents);
			props.handleTotalStudents(totalStudents);
			return {
				selectedClass: props.className,
				students: students,
			};
		} else {
			if (props.className !== state.selectedClass) {
				props.handleTotalStudents(totalStudents);
			}
			return { selectedClass: props.className };
		}
	}

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// 	let totalStudents = MyClass.calculateTotalStudents(
	// 		this.state.selectedClass,
	// 		this.state.students
	// 	);
	// 	this.props.handleTotalStudents(totalStudents);
	// }

	render() {
		console.log('MyClass render', this.state.selectedClass);
		let displayStudents = [...this.state.students];
		displayStudents = displayStudents.filter(
			(data) => data.className === this.state.selectedClass
		);

		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid
					key='1'
					rows={displayStudents}
					columns={this.state.columns}
				/>
			</div>
		);
	}
}

export default MyClass;
