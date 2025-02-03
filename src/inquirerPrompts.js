// filepath: /C:/Users/carme/Documents/EmpTrack_10/src/inquirerPrompts.js
import inquirer from 'inquirer';

export async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Delete Department', 'Delete Role', 'Delete Employee', 'Update Employee Manager', 'View Employees By Manager', 'View Employees By Department', 'View Total Budget By Department', 'Exit']
        }
    ]);

    return action;
}

export async function promptAddDepartment() {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the new department:'
        }
    ]);

    return { name };
}

export async function promptAddRole() {
    const { title, salary, departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the new role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the new role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the new role:'
        }
    ]);

    return { title, salary, departmentId };
}

export async function promptAddEmployee() {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the new employee:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the new employee:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID of the new employee:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID of the new employee (leave blank if none):',
            default: null
        }
    ]);

    return { firstName, lastName, roleId, managerId };
}

export async function promptDeleteDepartment() {
    const { departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the ID of the department to delete:'
        }
    ]);

    return { departmentId };
}

export async function promptDeleteRole() {
    const { roleId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the ID of the role to delete:'
        }
    ]);

    return { roleId };
}

export async function promptDeleteEmployee() {
    const { employeeId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee to delete:'
        }
    ]);

    return { employeeId };
}

export async function promptUpdateEmployeeManager() {
    const { employeeId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee to update:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the new manager ID for the employee:'
        }
    ]);

    return { employeeId, managerId };
}

export async function promptViewEmployeesByManager() {
    const { managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID to view employees by:'
        }
    ]);

    return { managerId };
}

export async function promptViewEmployeesByDepartment() {
    const { departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID to view employees by:'
        }
    ]);

    return { departmentId };
}

export async function promptViewTotalBudgetByDepartment() {
    const { departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID to view the total utilized budget:'
        }
    ]);

    return { departmentId };
}
