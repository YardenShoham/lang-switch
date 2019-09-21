import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Button from "../../../components/common/Button";

describe("<Button />", () => {
    it("should have a button with additional classes when provided", () => {
        const classes = "class1 class2 class3";
        const { container } = render(<Button className={classes} />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass(...classes.split(/ /));
    });

    it("should have a text showing the word the provided label", () => {
        const label = "Label";
        const { queryByText } = render(<Button label={label} />);

        expect(queryByText(label)).not.toBeNull();
    });
});
