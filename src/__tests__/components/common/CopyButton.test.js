import { toHaveClass } from "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import CopyButton from "./../../../components/common/CopyButton";

expect.extend({ toHaveClass });

describe("<CopyButton />", () => {
    it("should have a button with the btn, btn-secondary and float-right classes (exactly these 3) by default", () => {
        const { container } = render(<CopyButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass("btn", "btn-secondary", "float-right");
        expect(Object.keys(innerButton.classList).length).toBe(3);
    });

    it("should have a button with additional classes when provided", () => {
        const classes = "class1 class2 class3";
        const { container } = render(<CopyButton className={classes} />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(...classes.split(/ /));
    });

    it('should have a text showing the word "Copy"', () => {
        const { queryByText } = render(<CopyButton />);

        expect(queryByText(/Copy/)).not.toBeNull();
    });
});
