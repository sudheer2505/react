const { default: Sum } = require("../Sum")

test("should test sum functionality", () => {

    const val = Sum(3,4);
    expect(val).toBe(7)

})