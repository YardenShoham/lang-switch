import React from "react";
import Select from "./common/Select";
import SwapButton from "./common/SwapButton";

/**
 * Represents a pair of languages.
 *
 * This component is comprised of two Select elements (one for each language) and a Swap button to switch between them.
 *
 * General Look:
 * <<From Language>> <<Swap Button>> <<To Language>>
 *
 * This component exists so the user can choose from which language to change to another language. It also allows for a quick swap between those.
 *
 * @param {Object} languagePairOptions An object with the following properties: languages, selectedLanguageFrom, onChangeFrom, selectedLanguageTo, onChangeTo, onSwap
 * @returns {ReactComponent} The language pair component.
 */
const LanguagePair = ({
    languages,
    selectedLanguageFrom,
    onChangeFrom,
    selectedLanguageTo,
    onChangeTo,
    onSwap
}) => {
    return (
        <div className="form-group">
            <div className="row center">
                <Select
                    label="From"
                    options={languages}
                    selectedOption={selectedLanguageFrom}
                    onChange={onChangeFrom}
                />
                <div className="col-sm-2">
                    <SwapButton data-testid="swap-button" onClick={onSwap} />
                </div>
                <Select
                    label="To"
                    options={languages}
                    selectedOption={selectedLanguageTo}
                    onChange={onChangeTo}
                />
            </div>
        </div>
    );
};

export default LanguagePair;
