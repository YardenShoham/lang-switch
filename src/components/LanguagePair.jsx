import React from "react";
import Select from "./common/Select";
import SwapButton from "./common/SwapButton";

const LanguagePair = ({
    options,
    selectedOptionFrom,
    onChangeFrom,
    selectedOptionTo,
    onChangeTo,
    onSwap
}) => {
    return (
        <div className="form-group">
            <div className="row center">
                <div className="col-sm-3">
                    <Select
                        label="From"
                        options={options}
                        selectedOption={selectedOptionFrom}
                        onChange={onChangeFrom}
                    ></Select>
                </div>
                <div className="col-sm-2">
                    <SwapButton onClick={onSwap} />
                </div>
                <div className="col-sm-3">
                    <Select
                        label="To"
                        options={options}
                        selectedOption={selectedOptionTo}
                        onChange={onChangeTo}
                    ></Select>
                </div>
            </div>
        </div>
    );
};

export default LanguagePair;
