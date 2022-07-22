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
        it("should return 99", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const example = new Employee(name, id, email).getId(id);
            expect(example).toEqual(id)
        } )
        it("should return sn@gmail.com", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const example = new Employee(name, id, email).getEmail(email);
            expect(example).toEqual(email)
        } )
    })
})