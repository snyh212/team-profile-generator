const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getinfo", () => {
        it("should return githubexample", () =>{
            const name = "yed";
            const id = "99";
            const email = "sn@gmail.com";
            const github = "githubexample";
            const example = new Engineer(name, id, email, github).getGithub(github);
            expect(example).toEqual(github)
        } )
    })
})