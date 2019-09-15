import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguagePair from "./components/LanguagePair";

class App extends Component {
    state = { selectedOptionFrom: "Hebrew", selectedOptionTo: "English" };

    handleSelectFrom = e =>
        this.setState({ selectedOptionFrom: e.target.value });

    handleSelectTo = e => this.setState({ selectedOptionTo: e.target.value });

    handleSwap = e =>
        this.setState({
            selectedOptionFrom: this.state.selectedOptionTo,
            selectedOptionTo: this.state.selectedOptionFrom
        });

    render() {
        const { selectedOptionFrom, selectedOptionTo } = this.state;
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand clickable">Lang Switch</span>
                </nav>
                <main className="container">
                    <LanguagePair
                        options={["Hebrew", "English"]}
                        onChangeFrom={this.handleSelectFrom}
                        onChangeTo={this.handleSelectTo}
                        selectedOptionFrom={selectedOptionFrom}
                        selectedOptionTo={selectedOptionTo}
                        onSwap={this.handleSwap}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
