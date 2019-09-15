import React from "react";

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
