const languages = require("../resources/languages");

class Changer {
    constructor() {
        this.languages = languages;
    }

    init(fromLanguage, toLanguage) {
        this.languageMap = new Map();
        for (let i = 0; i < 40; i++) {
            this.languageMap.set(
                this.languages[fromLanguage][i],
                this.languages[toLanguage][i]
            );
        }
    }

    change(inputText) {
        const lowerInputText = inputText.toLowerCase();
        let outputText = "";
        let newChar;
        for (const letter of lowerInputText) {
            newChar = this.languageMap.get(letter);
            outputText += newChar === undefined ? letter : newChar;
        }
        return outputText;
    }
}

export default new Changer();
