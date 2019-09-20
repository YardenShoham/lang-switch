import React from "react";
import { AwesomeButtonSocial } from "react-awesome-button";
import DarkTheme from "react-dark-theme";

const lightTheme = {
    background: "white",
    text: "#161617"
};

const darkTheme = {
    background: "#161617",
    text: "white"
};

function gitHubButton() {
    return (
        <AwesomeButtonSocial
            style={{
                position: "fixed",
                bottom: "1%",
                left: "0.5%"
            }}
            type="github"
            href="https://github.com/YardenShoham/lang-switch"
        >
            GitHub
        </AwesomeButtonSocial>
    );
}

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                Lang Switch
            </a>
            <DarkTheme light={lightTheme} dark={darkTheme} />
        </nav>
    );
}
export default {
    gitHubButton,
    navbar
};
