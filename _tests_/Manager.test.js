const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should return an object", () => {
        const newManager = new Manager();
        expect(typeof(newManager)).toBe("object");
    });

    it("Should return an object with specific properties", () => {
        const newManager = new Manager('Enrico', 24, 'enrico@test.com', '123-456-7890');
        expect(newManager.name).toEqual('Enrico');
        expect(newManager.id).toEqual(24);
        expect(newManager.email).toEqual('enrico@test.com');
        expect(newManager.officeNumber).toEqual('123-456-7890');
    });

    describe("getOfficeNumber", () => {
        it("Should return a string", () => {
            const newManager = new Manager('Enrico', 24, 'enrico@test.com', '123-456-7890');
            const returnOfficeNumber = newManager.officeNumber;
            expect(typeof(returnOfficeNumber)).toBe("string");
        });
    });

    describe("getRole", () => {
        it("Should return Manager as the role", () => {
            const newManager = new Manager();
            const returnRole = newManager.getRole();
            expect(returnRole).toEqual("Manager");
        });
    });
    
});