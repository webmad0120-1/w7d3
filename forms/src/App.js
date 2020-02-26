import React from "react";
import "./App.css";
import MyForm from "./MyForm";
import Ticker from "./Ticker";

export default class App extends React.Component {
  state = {
    companies: [
      {
        price: 200,
        name: "APPL"
      },
      {
        price: 300,
        name: "FUENLA"
      },
      {
        price: 40,
        name: "BAIRES"
      }
    ]
  };
  
  componentDidMount() {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    setInterval(() => {
      let clonedCompanies = [...this.state.companies];

      clonedCompanies = clonedCompanies.map(company => {
        company.price = randomInt(100, 500)

        return company
      });

      this.setState({
        ...this.state,
        companies: clonedCompanies
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.companies.map((company, idx) => (
          <Ticker key={idx} price={company.price} company={company.name}></Ticker>
        ))}

        {/* <MyForm></MyForm> */}
      </div>
    );
  }
}
