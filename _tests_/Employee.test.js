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

    describe("getName", () => {
        it("Should return a string", () => {
            const newEmployee = new Employee('Enrico', 24, 'enrico@test.com');
            const returnName = newEmployee.getName();
            expect(typeof(returnName)).toBe("string");
        });
    });

    describe("getId", () => {
        it("Should return a string", () => {
            const newEmployee = new Employee('Enrico', 24, 'enrico@test.com');
            const returnId = newEmployee.getId();
            expect(typeof(returnId)).toBe("number");
        });
    });

    describe("getEmail", () => {
        it("Should return a string", () => {
            const newEmployee = new Employee('Enrico', 24, 'enrico@test.com');
            const returnEmail = newEmployee.getEmail();
            expect(typeof(returnEmail)).toBe("string");
        });
    });

    describe("getRole", () => {
        it("Should return Employee as the role", () => {
            const newEmployee = new Employee();
            const returnRole = newEmployee.getRole();
            expect(returnRole).toEqual("Employee");
        });
    });
});