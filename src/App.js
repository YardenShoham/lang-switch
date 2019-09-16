import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import DarkTheme from "react-dark-theme";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguagePair from "./components/LanguagePair";
import LanguageChanger from "./components/LanguageChanger";
import Changer from "./utils/changeLanguage";
import CopyButton from "./components/common/CopyButton";
import PasteButton from "./components/common/PasteButton";

const lightTheme = {
    background: "white",
    text: "#161617"
};

const darkTheme = {
    background: "#161617",
    text: "white"
};

class App extends Component {
    state = {
        selectedOptionFrom: "English",
        selectedOptionTo: "Hebrew",
        fromValue: "",
        toValue: ""
    };

    constructor() {
        super();
        this.languages = Object.keys(Changer.languages);
    }

    languageChanged = () =>
        Changer.init(
            this.state.selectedOptionFrom,
            this.state.selectedOptionTo
        );

    handleSelectFrom = e =>
        this.setState({ selectedOptionFrom: e.target.value }, () => {
            this.languageChanged();
            this.setState({ toValue: Changer.change(this.state.fromValue) });
        });

    handleSelectTo = e =>
        this.setState({ selectedOptionTo: e.target.value }, () => {
            this.languageChanged();
            this.setState({ toValue: Changer.change(this.state.fromValue) });
        });

    handleSwap = () =>
        this.setState(
            {
                selectedOptionFrom: this.state.selectedOptionTo,
                selectedOptionTo: this.state.selectedOptionFrom,
                fromValue: this.state.toValue,
                toValue: this.state.fromValue
            },
            () => {
                this.languageChanged();
                this.setState({
                    toValue: Changer.change(this.state.fromValue)
                });
            }
        );

    handleChange = e => {
        this.setState({
            fromValue: e.target.value,
            toValue: Changer.change(e.target.value)
        });
    };

    handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(this.state.toValue);
            toast.success("📃 Copied to clipboard!");
        } catch (ex) {
            toast.error("⁉ Your browser doesn't support copy.");
        }
    };

    handlePaste = async () => {
        try {
            this.setState(
                { fromValue: await navigator.clipboard.readText() },
                () => {
                    this.setState({
                        toValue: Changer.change(this.state.fromValue)
                    });
                }
            );
        } catch (ex) {
            toast.error("⁉ Your browser doesn't support paste.");
        }
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
                <ToastContainer autoClose={2600} />
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand clickable">Lang Switch</span>
                    <DarkTheme light={lightTheme} dark={darkTheme} />
                </nav>
                <main className="container">
                    <LanguagePair
                        options={this.languages}
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
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <PasteButton onClick={this.handlePaste} />
                            </div>
                            <div className="col">
                                <CopyButton onClick={this.handleCopy} />
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
