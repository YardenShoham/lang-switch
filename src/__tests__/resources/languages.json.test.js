import languages from "../../resources/languages";

describe("languages.json", () => {
    it("should have strings with a length of 40 exactly", () => {
        for (const languageString of Object.values(languages)) {
            expect(languageString.length).toBe(40);
        }
    });
});
