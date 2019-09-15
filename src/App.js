import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Select from "./components/common/select";

class App extends Component {
    state = { selectedOptionFrom: "Hebrew", selectedOptionTo: "English" };

    handleSelectFrom = e =>
        this.setState({ selectedOptionFrom: e.target.value });
    handleSelectTo = e => this.setState({ selectedOptionTo: e.target.value });

    render() {
        const { selectedOptionFrom, selectedOptionTo } = this.state;
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand clickable">Lang Switch</span>
                </nav>
                <main className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Select
                                label="From"
                                options={["Hebrew", "English"]}
                                selectedOption={selectedOptionFrom}
                                onChange={this.handleSelect}
                            ></Select>
                        </div>
                        <div className="col-sm-6">
                            <Select
                                label="To"
                                options={["Hebrew", "English"]}
                                selectedOption={selectedOptionTo}
                                onChange={this.handleSelect}
                            ></Select>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
