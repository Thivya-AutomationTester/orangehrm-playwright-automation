import { EmployeeData } from '../../pages/AddEmployeePage';

export interface ApiEmployeeData {
    firstName: string;
    lastName: string;
    employeeId: string;
}

export function createEmployeeData(): EmployeeData {
    const uniqueId = Date.now().toString().slice(-8);

    return {
        firstName: `Test${uniqueId}`,
        middleName: 'G',
        lastName: 'Marie',
        username: `user_${uniqueId}`,
        password: 'Susana@123',
    };
}

export function createApiEmployeeData(): ApiEmployeeData {
    const uniqueId = Date.now().toString().slice(-8);

    return {
        firstName: `Test${uniqueId}`,
        lastName: 'Employee',
        employeeId: uniqueId,
    };
}