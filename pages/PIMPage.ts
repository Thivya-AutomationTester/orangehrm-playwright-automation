import { Page, Locator } from '@playwright/test';
import { AddEmployeePage } from './AddEmployeePage';
import { EmployeeListPage } from './EmployeeListPage';

export class PIMPage {
    private readonly employeeList: Locator;
    private readonly addEmployee: Locator;


    constructor(private page: Page) {
        this.employeeList = page.getByRole('link', { name: 'Employee List' });
        this.addEmployee = page.getByRole('button', { name: 'Add' });

    }


    async goToEmployeeList(url: string): Promise<EmployeeListPage> {
        await this.page.goto(url);
        return new EmployeeListPage(this.page);
    }

    async goToAddEmployee(): Promise<AddEmployeePage> {
        await this.addEmployee.click();
        return new AddEmployeePage(this.page);
    }


}