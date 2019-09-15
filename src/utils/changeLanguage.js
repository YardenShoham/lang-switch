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
                "ё",
                "й",
                "ц",
                "у",
                "к",
                "е",
                "н",
                "г",
                "ш",
                "щ",
                "з",
                "х",
                "ъ",
                "ф",
                "ы",
                "в",
                "а",
                "п",
                "р",
                "о",
                "л",
                "д",
                "ж",
                "э",
                "я",
                "ч",
                "с",
                "м",
                "и",
                "Т",
                "ь",
                "б",
                "ю",
                ".",
                "(",
                ")",
                "Х",
                "Ъ",
                "Б",
                "Ю"
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
