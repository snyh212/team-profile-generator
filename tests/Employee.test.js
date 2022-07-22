const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getinfo", () => {
        it("should return yed", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const example = new Employee(name, id, email).getName(name);
            expect(example).toEqual(name)
        } )
    })
})