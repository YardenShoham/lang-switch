import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

describe("<App />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("has a swap button that, when clicked, swaps between languages", () => {
        const { container, queryByTestId } = render(<App />);
        const swapButton = queryByTestId("swap-button");
        const selects = container.querySelectorAll("select");
        const selectedLanguagesBeforeSwap = [
            selects[0].options[selects[0].selectedIndex].text,
            selects[1].options[selects[1].selectedIndex].text
        ];

        userEvent.click(swapButton);

        const selectedLanguagesAfterSwap = [
            selects[0].options[selects[0].selectedIndex].text,
            selects[1].options[selects[1].selectedIndex].text
        ];

        expect(selectedLanguagesBeforeSwap[0]).toBe(
            selectedLanguagesAfterSwap[1]
        );
        expect(selectedLanguagesBeforeSwap[1]).toBe(
            selectedLanguagesAfterSwap[0]
        );
    });

    it("can change a text in one language to another", () => {
        const { container, queryByTestId } = render(<App />);
        const selects = container.querySelectorAll("select");
        const selectFrom = selects[0];
        const selectTo = selects[1];

        userEvent.selectOptions(selectFrom, "Hebrew");
        userEvent.selectOptions(selectTo, "English");

        const fromTextArea = queryByTestId("from-textarea");
        const toTextArea = queryByTestId("to-textarea");

        userEvent.type(fromTextArea, "איןד ןד מןבק");

        expect(toTextArea).toHaveValue("this is nice");
    });
});
