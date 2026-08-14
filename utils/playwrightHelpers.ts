import { Locator, expect, Page } from '@playwright/test';

// Input / Keyboard Actions
export async function fillInput(locator: Locator, value: string) {
    await locator.fill(value);
}

export async function pressSequentially(locator: Locator, text: string, delay: number) {
    await locator.pressSequentially(text, { delay });
}

export async function clearInput(locator: Locator) {
    await locator.clear();
}

export async function pressKey(locator: Locator, key: string) {
    await locator.press(key);
}

// Click / Selection Actions
export async function clickElement(locator: Locator) {
    await locator.click();
}

export async function check(locator: Locator) {
    await locator.check();
}

export async function uncheck(locator: Locator) {
    await locator.uncheck();
}

export async function selectOption(locator: Locator, option: string) {
    await locator.selectOption(option);
}

// Mouse Actions
export async function mouseOver(locator: Locator) {
    await locator.hover();
}

// Assertions
export async function assertEnabled(locator: Locator) {
    await expect(locator).toBeEnabled();
}

export async function assertDisabled(locator: Locator) {
    await expect(locator).toBeDisabled();
}

export async function assertChecked(locator: Locator) {
    await expect(locator).toBeChecked();
}

export async function assertUnchecked(locator: Locator) {
    await expect(locator).not.toBeChecked();
}

export async function assertVisible(locator: Locator) {
    await expect(locator).toBeVisible();
}

export async function assertHidden(locator: Locator) {
    await expect(locator).toBeHidden();
}

export async function assertTitle(page: Page, title: string | RegExp) {
    await expect(page).toHaveTitle(title);
}

export async function assertURL(page: Page, url: string | RegExp) {
    await expect(page).toHaveURL(url);
}
export async function assertContainsText(locator: Locator, text: string | RegExp) {
    await expect(locator).toContainText(text);
}