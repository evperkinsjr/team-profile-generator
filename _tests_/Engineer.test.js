const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should return an object", () => {
        const newEngineer = new Engineer();
        expect(typeof(newEngineer)).toBe("object");
    });

    it("Should create an object with specific properties", () => {
        const newEngineer = new Engineer('Enrico', 24, 'enrico@test.com', 'evperkinsjr');
        expect(newEngineer.name).toEqual('Enrico');
        expect(newEngineer.id).toEqual(24);
        expect(newEngineer.email).toEqual('enrico@test.com');
        expect(newEngineer.gitHub).toEqual('evperkinsjr');
    });

    describe("getGitHub", () => {
        it("Should return a string", () => {
            const newEngineer = new Engineer('Enrico', 24, 'enrico@test.com', 'evperkinsjr');
            const returnGitHub = newEngineer.getGitHub();
            expect(typeof(returnGitHub)).toBe("string");
        });
    });

    describe("getRole", () => {
        it("Should return Engineer as the role", () => {
            const newEngineer = new Engineer();
            const returnRole = newEngineer.getRole();
            expect(returnRole).toEqual("Engineer");
        });
    });

});