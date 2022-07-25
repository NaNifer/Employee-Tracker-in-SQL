// Import queries
const {
  allDptQuery,
  allEmplQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
} = require("./config/queries");

async function displayDept() {
  try {
    const departments = await connection.query(allDptQuery);
    console.log("\n\n\n\n\n\nALL DEPARTMENTS");
    console.table(departments[0]);
    // !!!!! I want to remove the index reference from the table (above).
  } catch (error) {
    console.log(error);
  }
}

async function displayEmpl() {
  try {
    console.log("L46", askQ.chooseTask);
    const employees = await connection.query(allEmplQuery);
    console.log("\n\n\n\n\n\nALL EMPLOYEES");
    console.table(employees[0]);
  } catch (error) {
    console.log(error);
  }
}

async function addDept() {
  try {
    // POST to DB
    console.table("\n\n\n\n\nDepartment Added");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  displayDept,
  displayEmpl,
  addDept,
  addRole,
  addEmpl,
  updateRole,
};
