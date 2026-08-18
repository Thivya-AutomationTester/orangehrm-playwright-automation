import { APIRequestContext } from '@playwright/test';

export class ApiUtils {
    constructor(private request: APIRequestContext) { }

    async createEmployee(employeeDetails: object) {
        const response = await this.request.post(
            '/web/index.php/api/v2/pim/employees',
            {
                data: employeeDetails,
            }
        );

        if (!response.ok()) {
            throw new Error(
                `Failed to create employee. Status: ${response.status()}, Body: ${await response.text()}`
            );
        }

        return await response.json();
    }
}