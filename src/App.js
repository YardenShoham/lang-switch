import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-awesome-button/dist/styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LanguagePair from "./components/LanguagePair";
import LanguageChanger from "./components/LanguageChanger";
import CopyPasteButtons from "./components/CopyPasteButtons";
import Changer from "./utils/changeLanguage";
import generate from "./utils/generateAppComponents";

toast.configure({
    autoClose: 2000,
    hideProgressBar: true
});

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
            /* istanbul ignore next */
            toast.success("📃 Copied to clipboard!");
        } catch (ex) {
            /* istanbul ignore next */
            toast.error("⁉ Your browser doesn't support copy.");
        }
    };

    handlePaste = async () => {
        try {
            /* istanbul ignore next */
            this.setState(
                { fromValue: await navigator.clipboard.readText() },
                () => {
                    this.setState({
                        toValue: Changer.change(this.state.fromValue)
                    });
                }
            );
        } catch (ex) {
            /* istanbul ignore next */
            toast.error("⁉ Your browser doesn't support paste.");
        }
    };

    languagePairProps = () => {
        return {
            languages: this.languages,
            onChangeFrom: this.handleSelectFrom,
            onChangeTo: this.handleSelectTo,
            selectedLanguageFrom: this.state.selectedOptionFrom,
            selectedLanguageTo: this.state.selectedOptionTo,
            onSwap: this.handleSwap
        };
    };

    componentDidMount() {
        this.languageChanged();
    }

    render() {
        const { fromValue, toValue } = this.state;
        return (
            <React.Fragment>
                {generate.navbar()}
                <main className="container">
                    <LanguagePair {...this.languagePairProps()} />
                    <LanguageChanger
                        onChange={this.handleChange}
                        fromValue={fromValue}
                        toValue={toValue}
                    />
                    <CopyPasteButtons
                        onCopy={this.handleCopy}
                        onPaste={this.handlePaste}
                    />
                    {generate.gitHubButton()}
                </main>
            </React.Fragment>
        );
    }
}

export default App;
