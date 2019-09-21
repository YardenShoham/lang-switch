import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, queryByRole } from "@testing-library/react";
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

        function currentLanguages() {
            return [
                selects[0].options[selects[0].selectedIndex].text,
                selects[1].options[selects[1].selectedIndex].text
            ];
        }
        const selectedLanguagesBeforeSwap = currentLanguages();

        userEvent.click(swapButton);

        const selectedLanguagesAfterSwap = currentLanguages();

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

    it("should copy the text from the result to the clipboard and should be able to paste", () => {
        jest.useFakeTimers();
        const { container, queryByTestId, getByText } = render(<App />);
        const selects = container.querySelectorAll("select");
        const selectFrom = selects[0];
        const selectTo = selects[1];

        userEvent.selectOptions(selectFrom, "English");
        userEvent.selectOptions(selectTo, "English");

        const fromTextArea = queryByTestId("from-textarea");

        const phrase = "hello, world!";
        userEvent.type(fromTextArea, phrase);
        userEvent.click(getByText("Copy"));
        userEvent.type(fromTextArea, "random text");
        userEvent.click(getByText("Paste"));

        jest.advanceTimersByTime(100);

        const textInClipboard = fromTextArea.value;
        const toTextArea = queryByTestId("to-textarea");

        expect(toTextArea.value).toBe(textInClipboard);
    });
});
