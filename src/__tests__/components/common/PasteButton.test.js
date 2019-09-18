import { toHaveClass } from "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import PasteButton from "./../../../components/common/PasteButton";

expect.extend({ toHaveClass });

describe("<PasteButton />", () => {
    it("should have a button with the btn and btn-secondary classes (exactly these 2) by default", () => {
        const { container } = render(<PasteButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass("btn", "btn-secondary");
        expect(Object.keys(innerButton.classList).length).toBe(2);
    });

    it("should have a button with additional classes when provided", () => {
        const classes = "class1 class2 class3";
        const { container } = render(<PasteButton className={classes} />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(...classes.split(/ /));
    });

    it('should have a text showing the word "Paste"', () => {
        const { queryByText } = render(<PasteButton />);

        expect(queryByText(/Paste/)).not.toBeNull();
    });
});
