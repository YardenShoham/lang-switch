import React from "react";
import Select from "./common/Select";

const LanguagePair = ({
    options,
    selectedOptionFrom,
    onChangeFrom,
    selectedOptionTo,
    onChangeTo
}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <Select
                    label="From"
                    options={options}
                    selectedOption={selectedOptionFrom}
                    onChange={onChangeFrom}
                ></Select>
            </div>
            <div className="col-sm-6">
                <Select
                    label="To"
                    options={options}
                    selectedOption={selectedOptionTo}
                    onChange={onChangeTo}
                ></Select>
            </div>
        </div>
    );
};

export default LanguagePair;
