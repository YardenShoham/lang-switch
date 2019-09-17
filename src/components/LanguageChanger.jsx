import React from "react";
import TextareaAutosize from "react-autosize-textarea";

/**
 * A component that represents a change of language.
 *
 * It has two text areas, one enabled and the other - not.
 *
 * @param {Object} languageChangerOptions An object with the following properties: onChange, fromValue, toValue
 * @returns {ReactComponent} The language changer component.
 */
const LanguageChanger = ({ onChange, fromValue, toValue }) => {
    return (
        <div className="form-group">
            <div className="row">
                <div className="col">
                    <TextareaAutosize
                        onChange={onChange}
                        dir="auto"
                        className="form-control"
                        value={fromValue}
                    />
                </div>
                <div className="col">
                    <TextareaAutosize
                        dir="auto"
                        className="form-control"
                        value={toValue}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default LanguageChanger;
