[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# team-profile-generator

[video tutorial](https://drive.google.com/file/d/1d00fflcGJQJjH9512kswGoSdKI8kdW20/view)

## Description
Team Profile Generator is a commond line application that uses inquirer.js to prompt the user with questions and uses the responses to write an HTML file with all of the data. It can be used to create a webpage that holds the specific information of employees in their own 'cards' with their names, ids, and email and for eachspecific type of employee there are additional question prompts.

## Technologies used

HTML, CSS, JS, node.js, inquirer@8.2.4, jest, bootstrap framework
On VS Code and GitBash


## Code and Functionality

### With this JS code we prompt the user with a question using the inquirer npm package:
```
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
```

### Here we use the values input by the user to generate the basic HTML structure:
```
module.exports = team => {
    return `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <title>Team Employees</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>

        <main> ${generateTeam(team)} </main>

    </body>
    
</html>
`;
}
```

### Finally here is the code that generates the HTML file:
```
function createTeam() {
    console.log("new members", answerData)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, team(answerData), "utf-8")
};

module.exports = answerData;
```

## Contact Infromation

[E-mail: Snyh121@gmail.com](mailto:snyh121@gmail.com)  
[GitHub: snyh212](https://github.com/snyh212)  
[LinkdIn: Shmuel-Hoffman](https://www.linkedin.com/in/shmuel-hoffman-254b0223b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2rg0PtBTLeG2szT2ZbGmg%3D%3D)