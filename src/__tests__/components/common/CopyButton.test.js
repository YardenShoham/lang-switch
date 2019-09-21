import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import CopyButton from "./../../../components/common/CopyButton";

describe("<CopyButton />", () => {
    it("should have a button with the btn, btn-secondary and float-right classes (exactly these 3) by default", () => {
        const { container } = render(<CopyButton />);
        const innerButton = container.querySelector("button");

        expect(innerButton).toHaveClass("btn", "btn-secondary", "float-right");
        expect(Object.keys(innerButton.classList).length).toBe(3);
    });
});
