import React from "react";
import CopyButton from "./common/CopyButton";
import PasteButton from "./common/PasteButton";

/**
 * A component that has both a Copy and Paste buttons.
 *
 * General Look:
 * <<Paste Button>>           <<Copy Button>>
 *
 * @param {function} onCopy The function that will be called when the Copy button is clicked.
 * @param {function} onPaste The function that will be called when the Paste button is clicked.
 * @returns {ReactComponent} The set of buttons.
 */
const CopyPasteButtons = ({ onCopy, onPaste }) => {
    return (
        <div className="form-group">
            <div className="row">
                <div className="col">
                    <PasteButton onClick={onPaste} />
                </div>
                <div className="col">
                    <CopyButton onClick={onCopy} />
                </div>
            </div>
        </div>
    );
};

export default CopyPasteButtons;
