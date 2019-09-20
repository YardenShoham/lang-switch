import React from "react";
import CopyButton from "./common/CopyButton";
import PasteButton from "./common/PasteButton";

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
