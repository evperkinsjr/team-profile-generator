const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should return an object", () => {
        const newEmployee = new Employee();
        expect(typeof newEmployee).toBe("object");
    });
})