import React from 'react';

class StudentsInfoComponent extends React.Component {
    constructor(props){
        super(props);
        this.students = props.students || [];
    }

    render() {

        return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {this.students.map((student) => (
                <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                </tr>
            ))}
            </tbody>
        </table>
        );
    }
}

export default StudentsInfoComponent;
