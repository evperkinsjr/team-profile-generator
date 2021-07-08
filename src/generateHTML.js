let employeeCards = [];

function devTeamHTML(team) {
    let teammate;
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            teammate = `<div class="col-4 px-4">
            <div class="card text-white bg-dark mb-4">
              <div class="card-body">
              <div class="card-header text-center">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Employee ID</strong>: ${team[i].id}</li>
                  <li class="list-group-item"><strong>Email</strong>: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                  <li class="list-group-item"><strong>Office Number</strong>: ${team[i].officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>`;

          employeeCards.push(teammate);

        } else if (team[1].getRole() === 'Engineer') {
            teammate = `<div class="col-4 px-4">
            <div class="card text-white bg-primary mb-4">
              <div class="card-body">
              <div class="card-header text-center">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Employee ID</strong>: ${team[i].id}</li>
                  <li class="list-group-item"><strong>Email</strong>: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                  <li class="list-group-item"><strong>GitHub</strong>: <a href="https://github.com/${team[i].gitHub}" target="_blank">${team[i].gitHub}</a></li>
                </ul>
              </div>
            </div>
          </div>`;

          employeeCards.push(teammate);

        } else {
            teammate = `<div class="col-4 px-4">
            <div class="card text-white bg-success mb-4">
              <div class="card-body">
              <div class="card-header text-center">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>Employee ID</strong>: ${team[i].id}</li>
                  <li class="list-group-item"><strong>Email</strong>: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                  <li class="list-group-item"><strong>School</strong>: ${team[i].school}</li>
                </ul>
              </div>
            </div>
          </div>`;

          employeeCards.push(teammate);
        }
    }
}

function generateHTML(team) {
    devTeamHTML(team);

    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <title>My Team</title>
      </head>
      <body>
        <div class="jumbotron-fluid bg-danger text-white">
          <div class="container p-2">
            <h1 class="display-2 fw-bold">My Team</h1>
          </div>
        </div>
        <div class="row row-cols-4 g-1 pt-3 ms-5 me-5 justify-content-center">
        ${employeeCards.join("")}
      </div>
      </body>
    </html>`;
}

module.exports = {
    generateHTML,
    devTeamHTML,
};