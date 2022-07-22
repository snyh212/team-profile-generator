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
}
return html.join('');
}

let html = [];

const generateManager = Manager => {
    console.log(Manager);
    let managerHtml = `
    <div class="card col">
        <div class="card-header">${Manager.name}<br/>
            Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${Manager.email}">${Manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
        </ul>
    </div>
        `;
        html.push(managerHtml);
}

const generateEngineer = Engineer => {
    console.log(Engineer);
    let engineerHtml = `
    <div class="card col">
        <div class="card-header">${Engineer.name}<br/>
            Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${Engineer.email}">${Engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${Engineer.github}">${Engineer.github}</a></li>
        </ul>
    </div>
        `;
        html.push(engineerHtml);
}

const generateIntern = Intern => {
    console.log(Intern);
    let internHtml = `
    <div class="card col">
        <div class="card-header">${Intern.name}<br/>
            Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${Intern.email}">${Intern.email}</a></span></li>
            <li class="list-group-item">School: ${Intern.school}</li>
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

        <main class="container-fluid"><div class"row"> ${generateTeam(team)} </div></main>

    </body>
    
</html>
`;
}