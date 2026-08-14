import { Page, Locator, expect } from '@playwright/test';
import * as helpers from '../utils/playwrightHelpers'
export class EmployeePage {
    private readonly pimPage: Locator;
    constructor(private page: Page) {
        this.pimPage = this.page.getByText("PIM");
    }
    async navigateToPIMPage() {
        await helpers.clickElement(this.pimPage);
    }
}