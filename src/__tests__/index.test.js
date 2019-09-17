const { exec } = require("child_process");

describe("index.js", () => {
    it("shouldn't crash", () => {
        exec("node index.js");
    });
});
