import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import SwapButton from "./../../../components/common/SwapButton";
import { notDeepEqual } from "assert";

describe("<SwapButton />", () => {
    it("should have a button with the btn, btn-primary, btn-lg and btn-block classes (exactly these 4) by default", () => {
        const { container } = render(<SwapButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(
            "btn",
            "btn-primary",
            "btn-lg",
            "btn-block"
        );
        expect(Object.keys(innerButton.classList).length).toBe(4);
    });

    it("should have a button with additional classes when provided", () => {
        const classes = "class1 class2 class3";
        const { container } = render(<SwapButton className={classes} />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(...classes.split(/ /));
    });

    it('should have an alt text showing the word "Swap"', () => {
        const { container } = render(<SwapButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveAttribute(
            "aria-label",
            expect.stringContaining("Swap")
        );
    });
});
