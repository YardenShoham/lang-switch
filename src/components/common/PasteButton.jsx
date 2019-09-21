import React from "react";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

/**
 * A button with a paste icon and a "Paste" text.
 *
 * @param {Object} props Props for a button.
 * @returns {ReactComponent} The paste button.
 */
const PasteButton = props => {
    return (
        <Button
            {...props}
            baseClasses="btn btn-secondary"
            label="Paste"
            icon={faPaste}
        />
    );
};

export default PasteButton;
