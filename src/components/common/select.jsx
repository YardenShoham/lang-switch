import React from "react";

const Input = ({ label, options, selectedOption, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
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

export default Input;
