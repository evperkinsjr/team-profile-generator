const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should return an object", () => {
        const newIntern = new Intern();
        expect(typeof(newIntern)).toBe("object");
    });

    it("Should create an object with specific properties", () => {
        const newIntern = new Intern('Enrico', 24, 'enrico@test.com', 'Hampton');
        expect(newIntern.name).toEqual('Enrico');
        expect(newIntern.id).toEqual(24);
        expect(newIntern.email).toEqual('enrico@test.com');
        expect(newIntern.school).toEqual('Hampton');
    });

    describe("getSchool", () => {
        it("Should return a string", () => {
            const newIntern = new Intern('Enrico', 24, 'enrico@test.com', 'Hampton');
            const returnSchool = newIntern.getSchool();
            expect(typeof(returnSchool)).toBe("string");
        });
    });

    describe("getRole", () => {
        it("Should return Intern as the role", () => {
            const newIntern = new Intern();
            const returnRole = newIntern.getRole();
            expect(returnRole).toEqual("Intern");
        });
    });
    
});