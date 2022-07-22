const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getinfo", () => {
        it("should return 3", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const officeNumber = "3";
            const example = new Manager(name, id, email, officeNumber).getOffice(officeNumber);
            expect(example).toEqual(officeNumber)
        } )
    })
})