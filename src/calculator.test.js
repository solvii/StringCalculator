const add = require("./calculator");

it("should return zero on my empty string", () => {
    expect(add("")).toBe(0);
});