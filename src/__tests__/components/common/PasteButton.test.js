import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import PasteButton from "./../../../components/common/PasteButton";

describe("<PasteButton />", () => {
    it("should have a button with the btn and btn-secondary classes (exactly these 2) by default", () => {
        const { container } = render(<PasteButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass("btn", "btn-secondary");
        expect(Object.keys(innerButton.classList).length).toBe(2);
    });
});
