const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getinfo", () => {
        it("should return UCB", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const school = "UCB";
            const example = new Intern(name, id, email, school).getSchool(school);
            expect(example).toEqual(school)
        } )
    })
})