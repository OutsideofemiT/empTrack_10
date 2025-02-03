// filepath: /C:/Users/carme/Documents/EmpTrack_10/db/queries.js
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'emptrack_10',
    password: 'Emit1273', // replace with your actual password
    port: 5432,
});

export async function viewDepartments() {
    try {
        const res = await pool.query('SELECT * FROM department');
        console.table(res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

export async function viewRoles() {
    try {
        const res = await pool.query('SELECT * FROM role');
        console.table(res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

export async function viewEmployees() {
    try {
        const res = await pool.query('SELECT * FROM employee');
        console.table(res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

export async function addDepartment(name) {
    try {
        console.log(`Adding department with name: ${name}`); // Debugging line
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Department ${name} added successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

export async function addRole(title, salary, departmentId) {
    try {
        console.log(`Adding role with title: ${title}, salary: ${salary}, departmentId: ${departmentId}`); // Debugging line
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
        console.log(`Role ${title} added successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

export async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
        console.log(`Adding employee with firstName: ${firstName}, lastName: ${lastName}, roleId: ${roleId}, managerId: ${managerId}`); // Debugging line
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
        console.log(`Employee ${firstName} ${lastName} added successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to delete a department
export async function deleteDepartment(departmentId) {
    try {
        await pool.query('DELETE FROM department WHERE id = $1', [departmentId]);
        console.log(`Department with ID ${departmentId} deleted successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to delete a role
export async function deleteRole(roleId) {
    try {
        await pool.query('DELETE FROM role WHERE id = $1', [roleId]);
        console.log(`Role with ID ${roleId} deleted successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to delete an employee
export async function deleteEmployee(employeeId) {
    try {
        await pool.query('DELETE FROM employee WHERE id = $1', [employeeId]);
        console.log(`Employee with ID ${employeeId} deleted successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to update employee manager
export async function updateEmployeeManager(employeeId, managerId) {
    try {
        await pool.query('UPDATE employee SET manager_id = $1 WHERE id = $2', [managerId, employeeId]);
        console.log(`Employee with ID ${employeeId} updated with manager ID ${managerId} successfully.`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to view employees by manager
export async function viewEmployeesByManager(managerId) {
    try {
        const res = await pool.query('SELECT * FROM employee WHERE manager_id = $1', [managerId]);
        console.table(res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to view employees by department
export async function viewEmployeesByDepartment(departmentId) {
    try {
        const res = await pool.query('SELECT * FROM employee WHERE role_id IN (SELECT id FROM role WHERE department_id = $1)', [departmentId]);
        console.table(res.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}

// Function to view total budget by department
export async function viewTotalBudgetByDepartment(departmentId) {
    try {
        const res = await pool.query('SELECT SUM(salary) AS total_budget FROM role WHERE department_id = $1', [departmentId]);
        console.log(`Total utilized budget for department ID ${departmentId}: $${res.rows[0].total_budget}`);
    } catch (err) {
        console.error('Error executing query', err.stack);
    }
}
