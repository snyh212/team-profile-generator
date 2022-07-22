const generateTeam = (team) => {
    console.log(team);


    for (let i=0; i<team.length; i++){
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
        return html.join('');
}
}
let html = [];
const generateManager = Manager => {
    console.log(Manager);
    let managerHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${Manager.name}<br/>
            <i class="fas fa-mug-hot"></i>Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item>ID: ${Manager.id}</li>
            <li class="list-group-item>Email: <span id=email"><a href="mailto:${Manager.email}">${Manager.email}</li>
            <li class="list-group-item>Office Number: ${Manager.officeNumber}</li>
        </ul>
    </div>
        `;
        html.push(managerHtml);
}

const generateEngineer = Engineer => {
    console.log(Engineer);
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${Engineer.name}<br/>
            <i class="fas fa-glasses"></i>Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item>ID: ${Engineer.id}</li>
            <li class="list-group-item>Email: <span id=email"><a href="mailto:${Engineer.email}">${Engineer.email}</li>
            <li class="list-group-item>Github Username: <a target="_blank" href="https://github.com/${Engineer.githubUsername}">${Engineer.githubUsername}</a></li>
        </ul>
    </div>
        `;
        html.push(engineerHtml);
}

const generateIntern = Intern => {
    console.log(Intern);
    let internHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">${Intern.name}<br/>
            <i class="fas fa-user-graduate"></i>Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item>ID: ${Intern.id}</li>
            <li class="list-group-item>Email: <span id=email"><a href="mailto:${Intern.email}">${Intern.email}</li>
            <li class="list-group-item>School: ${Intern.school}</li>
        </ul>
    </div>
        `;
        html.push(internHtml);
}


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