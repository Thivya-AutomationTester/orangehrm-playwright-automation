import { Page, Locator } from '@playwright/test';
export interface EmployeeData {
    firstName: string;
    middleName: string;
    lastName: string;
    username: string;
    password: string;
}

export class EmployeePage {
    private readonly pimPage: Locator;
    private readonly addButton: Locator;
    private readonly firstName: Locator;
    private readonly middleName: Locator;
    private readonly lastName: Locator;
    private readonly createLogin: Locator;
    private readonly loginName: Locator;
    private readonly loginPassword: Locator;
    private readonly loginConfirmPassword: Locator;
    private readonly loginSaveButton: Locator;
    private readonly successToastMessage: Locator;
    private readonly employeeList: Locator;


    constructor(private page: Page) {
        this.pimPage = this.page.getByText('PIM');
        this.addButton = this.page.getByRole('button', { name: 'Add' });
        this.firstName = this.page.getByPlaceholder('First Name');
        this.middleName = this.page.getByPlaceholder('Middle Name');
        this.lastName = this.page.getByPlaceholder('Last Name');
        this.createLogin = this.page.locator('.--label-right');
        this.loginName = this.page.locator("//label[text()='Username']/parent::div/following-sibling::div/input");
        this.loginPassword = this.page.locator("//label[text()='Password']/parent::div/following-sibling::div/input");
        this.loginConfirmPassword = this.page.locator("//label[text()='Confirm Password']/parent::div/following-sibling::div/input");
        this.loginSaveButton = this.page.getByRole('button', { name: 'Save' });
        this.successToastMessage = this.page.getByText('Successfully Saved');
        this.employeeList = this.page.getByRole('link', { name: 'Employee List' });
    }
    async navigateToPIMPage() {
        await this.pimPage.click();
    }
    async navigateToDashboardPage() {
        await this.page.goto("/web/index.php/dashboard/index");
    }
    async navigateToAddEmployeePage() {
        await this.addButton.click();
    }
    async navigateToEmployeeList() {
        await this.employeeList.click();
    }

    async addEmployeeWithLogin(employee: EmployeeData) {
        await this.firstName.fill(employee.firstName);
        await this.middleName.fill(employee.middleName);
        await this.lastName.fill(employee.lastName);
        await this.createLogin.click();
        await this.loginName.fill(employee.username);
        await this.loginPassword.fill(employee.password);
        await this.loginConfirmPassword.fill(employee.password);
        await this.loginSaveButton.click();

    }
    getSuccessMessage(): Locator {
        return this.successToastMessage;
    }

}