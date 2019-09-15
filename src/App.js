import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguagePair from "./components/LanguagePair";
import LanguageChanger from "./components/LanguageChanger";
import Changer from "./utils/changeLanguage";

class App extends Component {
    state = {
        selectedOptionFrom: "Hebrew",
        selectedOptionTo: "English",
        fromValue: "",
        toValue: ""
    };

    languageChanged = () =>
        Changer.init(
            this.state.selectedOptionFrom,
            this.state.selectedOptionTo
        );

    handleSelectFrom = e =>
        this.setState(
            { selectedOptionFrom: e.target.value },
            this.languageChanged
        );

    handleSelectTo = e =>
        this.setState(
            { selectedOptionTo: e.target.value },
            this.languageChanged
        );

    handleSwap = () =>
        this.setState(
            {
                selectedOptionFrom: this.state.selectedOptionTo,
                selectedOptionTo: this.state.selectedOptionFrom,
                fromValue: this.state.toValue,
                toValue: this.state.fromValue
            },
            this.languageChanged
        );

    handleChange = e => {
        this.setState({
            fromValue: e.target.value,
            toValue: Changer.change(e.target.value)
        });
    };

    componentDidMount() {
        this.languageChanged();
    }

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
                </main>
            </React.Fragment>
        );
    }
}

export default App;
