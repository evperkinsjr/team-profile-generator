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