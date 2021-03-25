import React from 'react';
// import './Countries.css';
import { DataGrid } from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForIcon from '@material-ui/icons/DeleteForever';
// import Moment from 'react-moment';
// import moment from 'moment';

class MyClass extends React.Component {
	constructor(props) {
		super(props);
		const columns = [
			{
				field: 'actions',
				headerName: 'Actions',
				width: 100,
				renderCell: (params) => (
					<div style={{ marginTop: 10, cursor: 'pointer' }}>
						<EditIcon onClick={() => this.editRow(params.value)} />
						<DeleteForIcon
							onClick={() => this.deleteRow(params.value)}
						/>
					</div>
				),
			},
			{
				field: 'id',
				headerName: 'ID',
				width: 70,
			},
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
			newStudent.actions = newStudent.id;

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

	editRow = (id) => {
		console.log('editRow', id);
	};

	deleteRow = (id) => {
		console.log('deleteRow', id);
	};

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate');
	// 	let totalStudents = MyClass.calculateTotalStudents(
	// 		this.state.selectedClass,
	// 		this.state.students
	// 	);
	// 	this.props.handleTotalStudents(totalStudents);
	// }

	render() {
		// console.log('MyClass render', this.state.selectedClass);
		let displayStudents = [...this.state.students];
		displayStudents = displayStudents.filter(
			(data) => data.className === this.state.selectedClass
		);

		return (
			<div style={{ height: 700, width: '100%' }}>
				<DataGrid rows={displayStudents} columns={this.state.columns} />
			</div>
		);
	}
}

export default MyClass;
