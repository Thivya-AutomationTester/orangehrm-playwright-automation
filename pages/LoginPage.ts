import { Page, Locator } from '@playwright/test';
import * as helpers from '../utils/playwrightHelpers';


export class LoginPage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(private page: Page) {
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.errorMessage = this.page.getByRole('alert').getByText('Invalid credentials');
    }
    async navigateToLoginPage() {
        await this.page.goto('/');
    }
    async login(username: string, password: string) {
        await helpers.fillInput(this.usernameInput, username);
        await helpers.fillInput(this.passwordInput, password);
        await helpers.clickElement(this.loginButton);
    }
    getErrorMessage(): Locator {
        return this.errorMessage;
    }
}