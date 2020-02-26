import React from "react";
import axios from "axios";
import "./App.css";

export default class MyForm extends React.Component {
  state = {
    name: "luciano",
    surname: "sanchez",
    age: 30,
    cc: "1234-1222-2222-2222",
    employees: []
  };

  componentDidMount() {
      this.getAllEmployees()
  }

  // don't write a handler function for each form component
  // rather write an unified function
  // updateName(e) {
  //   this.setState({
  //     ...this.state,
  //     name: e.target.value
  //   })
  // }

  // updateSurname(e) {
  // this.setState({
  //   ...this.state,
  //   surname: e.target.value
  // })
  // }

  updateForm(e, field) {
    // let clonedState = {...this.state}
    // clonedState[field] = e.target.value
    // this.setState(clonedState)

    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  getAllEmployees() {
    axios.get("http://localhost:4000/allEmployees").then(allEmployees => {
      this.setState({
        ...this.state,
        employees: allEmployees.data
      });
    });
  }

  sendForm(e) {
    e.preventDefault();

    axios.post("http://localhost:4000/addEmployee", this.state).then(payload => {
      // manu's question
      // this.setState({
      //   name: "",
      //   surname: "",
      //   age: 0,
      //   cc: "",
      //   userAdded: true
      // });

      if (payload.data.error) {
        this.setState({
          ...this.state,
          userAdded: false,
          userAddedError: payload.data.reason
        });
      } else {
        this.setState({
          ...this.state,
          userAdded: true,
          userAddedError: false
        });
      }
    });
  }

  render() {
    return (
      <form>
        <h1>
          {this.state.name + " " + this.state.surname} ({this.state.age})
        </h1>

        <ul>
            {this.state.employees.map((employee) => <li>{employee.name}</li>)}
        </ul>

        <h5>{this.state.cc}</h5>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.updateForm(e, "name")}
        />
        <input
          type="text"
          placeholder="surname"
          value={this.state.surname}
          onChange={e => this.updateForm(e, "surname")}
        />
        <input
          type="number"
          placeholder="age"
          // max="50"
          value={this.state.age}
          onChange={e => this.updateForm(e, "age")}
        />
        <input
          type="text"
          placeholder="cc number"
          value={this.state.cc}
          onChange={e => this.updateForm(e, "cc")}
        />

        <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} />
        <input type="button" value={"Get all employees"} onClick={e => this.getAllEmployees(e)} />

        {this.state.userAdded && <h5>✅ Employee has been added</h5>}
        {this.state.userAddedError && (
          <h5>❌ Employee has not been added. Reason: {this.state.userAddedError}</h5>
        )}
      </form>
    );
  }
}
