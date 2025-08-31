let role = prompt("Enter your role (Admin / Manager / Employee / Intern):");

let access;
let experience;
let department;

if (role == "Admin" || role == "admin" || role == "ADMIN") {
    access = true;
}
else if (role == "Manager" || role == "manager" || role == "MANAGER") {
    experience = +prompt("Enter your years of experience:");

    if (experience >= 2) {
        access = true;
    }

    else {
        access = false;
    }
}
else if (role == "Employee" || role == "employee" || role == "EMPLOYEE") {
    experience = +prompt("Enter your years of experience:");

    if (experience > 3) {
        department = prompt("Enter your department (IT / HR):");

        if (department == "It" || department == "it" || department == "IT" || department == "Hr" || department == "hr" || department == "HR"){
            access = true;
        }
        
        else {
            access = false;
        }
    }

    else {
        access = false;
    }
}
else if (role == "Intern" || role == "intern" || role == "INTERN") {
    access = false;

}
else {
    access = false;
}

if (access == true) {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}