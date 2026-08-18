import { Page, Locator } from '@playwright/test';

export class SideBar {
    private readonly dashboard: Locator;
    private readonly pim: Locator;

    constructor(private page: Page) {
        this.dashboard = page.getByRole('link', { name: 'Dashboard' });
        this.pim = page.getByRole('link', { name: 'PIM' });
    }

    async goToDashboard(url: string) {
        await this.page.goto(url);
    }

    async goToPIM() {
        await this.pim.click();
    }
}