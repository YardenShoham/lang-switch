import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguagePair from "./components/LanguagePair";
import LanguageChanger from "./components/LanguageChanger";

class App extends Component {
    state = {
        selectedOptionFrom: "Hebrew",
        selectedOptionTo: "English",
        fromValue: "",
        toValue: ""
    };

    handleSelectFrom = e =>
        this.setState({ selectedOptionFrom: e.target.value });

    handleSelectTo = e => this.setState({ selectedOptionTo: e.target.value });

    handleSwap = e =>
        this.setState({
            selectedOptionFrom: this.state.selectedOptionTo,
            selectedOptionTo: this.state.selectedOptionFrom,
            fromValue: this.state.toValue,
            toValue: this.state.fromValue
        });

    handleChange = e => {};

    render() {
        const {
            selectedOptionFrom,
            selectedOptionTo,
            fromValue,
            toValue
        } = this.state;
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand clickable">Lang Switch</span>
                </nav>
                <main className="container">
                    <form>
                        <LanguagePair
                            options={["Hebrew", "English"]}
                            onChangeFrom={this.handleSelectFrom}
                            onChangeTo={this.handleSelectTo}
                            selectedOptionFrom={selectedOptionFrom}
                            selectedOptionTo={selectedOptionTo}
                            onSwap={this.handleSwap}
                        />
                        <LanguageChanger
                            onChange={this.handleChange}
                            fromValue={fromValue}
                            toValue={toValue}
                        />
                    </form>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
