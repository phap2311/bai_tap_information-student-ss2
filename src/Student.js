import React, {Component} from "react";

export default class Student extends Component {
    constructor() {
        super();
        this.state = {
            listStudent: [
                {
                    id: 1,
                    name: 'phap',
                    age: 20,
                    address: 'quang tri'
                },
                {
                    id: 2,
                    name: 'dat',
                    age: 24,
                    address: 'ha tinh'
                },
                {
                    id: 3,
                    name: 'nhat',
                    age: 25,
                    address: 'quang tri'
                },
                {
                    id: 4,
                    name: 'dung',
                    age: 28,
                    address: 'quang ngai'
                },
            ],
            inputId: '',
            inputName: '',
            inputAge: '',
            inputAddress: ''
        }
    }
    add = () => {
        let newStudent = {
            id : this.state.inputId,
            name : this.state.inputName,
            age : this.state.inputAge,
            address : this.state.inputAddress
        }
        let newState = {...this.state, listStudent: [...this.state.listStudent,newStudent],inputAddress:"",inputAge: "",inputName: "",inputId: "" };
        this.setState(newState);

    }
input = (event) => {
    console.log(event.target.name)
    console.log(event.target.age)
    console.log(event.target.address)
    let newState = {...this.state, [event.target.name]: event.target.value};
    this.setState(newState)
}

    render() {
        return (
            <>
                <h1>Student Manager</h1>
                <input type="number" name={"inputId"} value={this.state.inputId} onChange={this.input}/>
                <input type="text" name={"inputName"} value={this.state.inputName} onChange={this.input}/>
                <input type="text" name={"inputAge"} value={this.state.inputAge} onChange={this.input}/>
                <input type="text" name={"inputAddress"} value={this.state.inputAddress} onChange={this.input}/>
                <button onClick={this.add}>Add</button>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.listStudent.map(student =>
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </>
        )
    }
}