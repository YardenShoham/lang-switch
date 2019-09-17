import Changer from "../../utils/changeLanguage";

describe("Changer", () => {
    describe("init", () => {
        it("should generate a map with 40 keys", () => {
            Changer.init("Hebrew", "English");
            expect(Changer.languageMap.size).toBe(40);
        });
    });

    describe("change", () => {
        it("should change a text from one language to another", () => {
            Changer.init("English", "Hebrew");
            const changed = Changer.change("akuo' guko!");
            expect(changed).toBe("שלום, עולם!");
        });
    });
});
