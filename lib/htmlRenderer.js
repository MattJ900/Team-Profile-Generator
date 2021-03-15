const Renderer = (employees) => { // Render function which we exporting at the bottom which employees (Take array of employees from index.js)
    console.log(employees);
let finalHtml = htmlHead  // Added basic html that we move to top of page to our HTML page
for (var i = 0; i < employees.length; i++ ){ // looping through employees
    finalHtml = finalHtml + card(employees[i])  // Added results of card function to our html page (Added card into the html)
}
finalHtml = finalHtml + htmlEnd // Added the bottom part of our HTML closing tags for the body and html
return finalHtml     // RETURNED AND USED IN THE INDEX.JS WRITE FILE
}

// TAKES EMPLOYEE AND RETURNS AND VALUE DEPENDING ON THE CLASS 
const gitLast = (emp) => {
    if(emp.getRole()==="Manager"){     // IF EMPLOYEE IF MANAGER GET OFFICE NUMBER
    return emp.getOfficeNumber()
}
    else if(emp.getRole()==="Intern"){ // IF EMPLOYEE IS INTERN WE GET SCHOOL
        return emp.getSchool()
        

        

    }else{ // if employee is enginereed we git github
        return emp.getGithub()
    }
     
}

// TOP OF HTML PAGE IMPORTS BOOTSTRAP
const htmlHead = ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
`
// this is the closing tags for the html Head
const htmlEnd = `
</body>
</html>`
// USES BUILDT IN FUNCTION / METHODS TOO GIT VALUE OF FOR EACH EMPLOYEES
// GITLAST TAKES EMPLOYEE AND RETURNS THE SPECIFIC VALUE DEPENDING ON THEIR ROLE 
const card =(emp) =>  `<div class="card" style="width: 18rem;">
<div class="card-header">
<h5 class="card-title">${emp.getName()}</h5>
<h5 class="card-title">${emp.getRole()}</h5>

<ROAR></div>
<div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${emp.getId()}</li>
    <li class="list-group-item">${emp.getEmail()}</li>
    <li class="list-group-item">${gitLast(emp)}</li>
  </ul>
</div>
</div>
`
module.exports = Renderer