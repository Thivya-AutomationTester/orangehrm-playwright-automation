import { Page, Locator } from '@playwright/test';

export class EmployeeListPage {

    private readonly employeeNamesList: Locator;
    private readonly searchByEmployeeName: Locator;
    private readonly searchBtn: Locator;

    constructor(private page: Page) {

        this.searchByEmployeeName = this.page.locator("//label[text()='Employee Name']").locator('../..').getByPlaceholder('Type for hints...');
        this.employeeNamesList = this.page.getByRole('listbox');
        this.searchBtn = this.page.getByText('Search');
    }

    async searchEmployee(employeeName: string) {
        await this.searchByEmployeeName.fill(employeeName);
        await this.employeeNamesList.filter({ hasText: employeeName }).click();
        await this.searchBtn.click();

    }

}