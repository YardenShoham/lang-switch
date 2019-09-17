import React from "react";

/**
 * A controlled react select element.
 *
 * It has a label as well as an actual select element.
 * @param {Object} selectOptions An object containing the label, options, selectedOption and onChange select attributes.
 * @returns {ReactComponent} The rendered select element.
 */
const Select = ({ label, options, selectedOption, onChange }) => {
    return (
        <div className="form-group">
            <h6 style={{ margin: 0 }}>
                <label htmlFor={label}>{label}</label>
            </h6>
            <select
                id={label}
                value={selectedOption}
                onChange={onChange}
                className="form-control"
            >
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
