import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import ClipboardButton from "./../../../components/common/ClipboardButton";

describe("<ClipboardButton />", () => {
    it("should have a button with additional classes when provided", () => {
        const classes = "class1 class2 class3";
        const { container } = render(<ClipboardButton className={classes} />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(...classes.split(/ /));
    });

    it("should have a text showing the word the provided label", () => {
        const label = "Label";
        const { queryByText } = render(<ClipboardButton label={label} />);

        expect(queryByText(label)).not.toBeNull();
    });
});
