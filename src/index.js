// filepath: /C:/Users/carme/Documents/EmpTrack_10/src/index.js

import {
    mainMenu,
    promptAddDepartment,
    promptAddRole,
    promptAddEmployee,
    promptDeleteDepartment,
    promptDeleteRole,
    promptDeleteEmployee,
    promptUpdateEmployeeManager,
    promptViewEmployeesByManager,
    promptViewEmployeesByDepartment,
    promptViewTotalBudgetByDepartment
} from './inquirerPrompts.js';
import {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    viewTotalBudgetByDepartment
} from '../db/queries.js';

async function runApp() {
    let exit = false;

    while (!exit) {
        const action = await mainMenu();

        switch (action) {
            case 'View Departments':
                await viewDepartments();
                break;
            case 'View Roles':
                await viewRoles();
                break;
            case 'View Employees':
                await viewEmployees();
                break;
            case 'Add Department':
                const { name } = await promptAddDepartment();
                console.log(`Department name entered: ${name}`); // Debugging line
                await addDepartment(name);
                break;
            case 'Add Role':
                const { title, salary, departmentId } = await promptAddRole();
                console.log(`Role details entered: title=${title}, salary=${salary}, departmentId=${departmentId}`); // Debugging line
                await addRole(title, salary, departmentId);
                break;
            case 'Add Employee':
                const { firstName, lastName, roleId, managerId: newManagerId } = await promptAddEmployee();
                console.log(`Employee details entered: firstName=${firstName}, lastName=${lastName}, roleId=${roleId}, managerId=${newManagerId}`); // Debugging line
                await addEmployee(firstName, lastName, roleId, newManagerId);
                break;
            case 'Delete Department':
                const deptDel = await promptDeleteDepartment();
                await deleteDepartment(deptDel.departmentId);
                break;
            case 'Delete Role':
                const roleDel = await promptDeleteRole();
                await deleteRole(roleDel.roleId);
                break;
            case 'Delete Employee':
                const empDel = await promptDeleteEmployee();
                await deleteEmployee(empDel.employeeId);
                break;
            case 'Update Employee Manager':
                const updateManagerInfo = await promptUpdateEmployeeManager();
                await updateEmployeeManager(updateManagerInfo.employeeId, updateManagerInfo.managerId);
                break;
            case 'View Employees By Manager':
                const { managerId } = await promptViewEmployeesByManager();
                await viewEmployeesByManager(managerId);
                break;
            case 'View Employees By Department':
                const viewDeptInfo = await promptViewEmployeesByDepartment();
                await viewEmployeesByDepartment(viewDeptInfo.departmentId);
                break;
            case 'View Total Budget By Department':
                const budgetDeptInfo = await promptViewTotalBudgetByDepartment();
                await viewTotalBudgetByDepartment(budgetDeptInfo.departmentId);
                break;
            case 'Exit':
                exit = true;
                break;
            default:
                console.log('Invalid action');
        }
    }
}

runApp();
