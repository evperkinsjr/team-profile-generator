const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should return an object", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });

    it("Should create an object with specific properties", () => {
        const newEmployee = new Employee('Enrico', 24, 'enrico@test.com');
        expect(newEmployee.name).toEqual('Enrico');
        expect(newEmployee.id).toEqual(24);
        expect(newEmployee.email).toEqual('enrico@test.com');
    });
})