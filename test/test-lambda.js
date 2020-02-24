const assert = require("assert");

describe("Unit test for Lambda", () => {
    it("Test whether string length are same", async () => {
        let testVariable = ['Java', 'Node Js', 'Typescript'];
        assert.equal(testVariable.length, 3);
    });
});