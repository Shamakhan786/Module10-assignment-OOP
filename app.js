const inquirer = require ("inquirer")
const { finished } = require("stream")

function begin () {
    inquirer.prompt([
        {
            type:"list", 
            name: "choice",
            message:"? what would you like to do",
            choices:["add engineer", "add intern", "add manager", "finished"]
        }
    ])

    .then(function(response){
        const choice = response.choice
        if( choice === "add engineer"){
            addengineer ()
        }

        if( choice === "add intern"){
            addintern ()
        }

        if( choice === "add manager"){
            addmanager ()
        }

        if( choice === "finished"){
            finished ()
        }
    })
}
begin();


