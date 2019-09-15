import React from "react";
import TextareaAutosize from "react-autosize-textarea";

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
