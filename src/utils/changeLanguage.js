class Changer {
    constructor() {
        this.languages = {
            English: [
                "`",
                "q",
                "w",
                "e",
                "r",
                "t",
                "y",
                "u",
                "i",
                "o",
                "p",
                "[",
                "]",
                "a",
                "s",
                "d",
                "f",
                "g",
                "h",
                "j",
                "k",
                "l",
                ";",
                "'",
                "z",
                "x",
                "c",
                "v",
                "b",
                "n",
                "m",
                ",",
                ".",
                "/",
                "(",
                ")",
                "{",
                "}",
                "<",
                ">"
            ],
            Hebrew: [
                ";",
                "/",
                "'",
                "ק",
                "ר",
                "א",
                "ט",
                "ו",
                "ן",
                "ם",
                "פ",
                "]",
                "[",
                "ש",
                "ד",
                "ג",
                "כ",
                "ע",
                "י",
                "ח",
                "ל",
                "ך",
                "ף",
                ",",
                "ז",
                "ס",
                "ב",
                "ה",
                "נ",
                "מ",
                "צ",
                "ת",
                "ץ",
                ".",
                "/",
                ")",
                "(",
                "}",
                "{",
                ">",
                "<"
            ],
            Russian: [
                "ё", // "`",
                "й", // "q",
                "ц", // "w",
                "у", // "e",
                "к", // "r",
                "е", // "t",
                "н", // "y",
                "г", // "u",
                "ш", // "i",
                "щ", // "o",
                "з", // "p",
                "х", // "[",
                "ъ", // "]",
                "ф", // "a",
                "ы", // "s",
                "в", // "d",
                "а", // "f",
                "п", // "g",
                "р", // "h",
                "о", // "j",
                "л", // "k",
                "д", // "l",
                "ж", // ";",
                "э", // "'",
                "я", // "z",
                "ч", // "x",
                "с", // "c",
                "м", // "v",
                "и", // "b",
                "Т", // "n",
                "ь", // "m",
                "б", // ",",
                "ю", // ".",
                ".", // "/",
                "(", // "(",
                ")", // ")",
                "Х", // "{",
                "Ъ", // "}",
                "Б", // "<",
                "Ю" // ">"
            ]
        };
    }

    init(fromLanguage, toLanguage) {
        this.languageMap = new Map();
        console.log(this.languageMap);

        for (let i = 0; i < 40; i++) {
            this.languageMap.set(
                this.languages[fromLanguage][i],
                this.languages[toLanguage][i]
            );
        }
    }

    change(inputText) {
        let outputText = "";
        let newChar;
        for (const letter of inputText) {
            newChar = this.languageMap.get(letter);
            outputText += newChar === undefined ? letter : newChar;
        }
        return outputText;
    }
}

export default new Changer();
