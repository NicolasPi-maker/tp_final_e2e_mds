import { test, expect } from '@playwright/test';

test.describe('Calculator', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
        test('Calculator should start at 0', async ({ page }) => {
            await expect(page.locator('.screen')).toHaveText('0');
        });
        test.describe('Individual number input', () => {
            test('input number 0', async ({ page }) => {
                await page.getByRole('button', { name: '0' }).click();
                await expect(page.locator('.screen')).toHaveText('0');
            });
            test('input number 2', async ({ page }) => {
                await page.getByRole('button', { name: '1' }).click();
                await expect(page.locator('.screen')).toHaveText('1');
            });
            test('input number 2', async ({ page }) => {
                await page.getByRole('button', { name: '2' }).click();
                await expect(page.locator('.screen')).toHaveText('2');
            });
            test('input number 3', async ({ page }) => {
                await page.getByRole('button', { name: '3' }).click();
                await expect(page.locator('.screen')).toHaveText('3');
            });
            test('input number 4', async ({ page }) => {
                await page.getByRole('button', { name: '4' }).click();
                await expect(page.locator('.screen')).toHaveText('4');
            });
            test('input number 5', async ({ page }) => {
                await page.getByRole('button', { name: '5' }).click();
                await expect(page.locator('.screen')).toHaveText('5');
            });
            test('input number 6', async ({ page }) => {
                await page.getByRole('button', { name: '6' }).click();
                await expect(page.locator('.screen')).toHaveText('6');
            });
            test('input number 7', async ({ page }) => {
                await page.getByRole('button', { name: '7' }).click();
                await expect(page.locator('.screen')).toHaveText('7');
            });
            test('input number 8', async ({ page }) => {
                await page.getByRole('button', { name: '8' }).click();
                await expect(page.locator('.screen')).toHaveText('8');
            });
            test('input number 9', async ({ page }) => {
                await page.getByRole('button', { name: '9' }).click();
                await expect(page.locator('.screen')).toHaveText('9');
            });
        });

        test.describe('Calculator test operations button', () => {
            test.describe('addition operations', () => {
                test('simply addition', async ({ page }) => {
                    await page.getByRole('button', { name: '1' }).click();
                    await page.getByRole('button', { name: 'sum' }).click();
                    await page.getByRole('button', { name: '1' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('2');
                });
                test('addition should return a number', async ({ page }) => {
                    await page.getByRole('button', { name: '9' }).click();
                    await page.getByRole('button', { name: 'sum' }).click();
                    await page.getByRole('button', { name: '5' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('14');
                });
            });
            test.describe('soustraction operations', () => {
                test('simply soustraction', async ({ page }) => {
                    await page.getByRole('button', { name: '1' }).click();
                    await page.getByRole('button', { name: 'soustraction' }).click();
                    await page.getByRole('button', { name: '1' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('0');
                });
                test('substract number by greater', async ({ page }) => {
                    await page.getByRole('button', { name: '5' }).click();
                    await page.getByRole('button', { name: 'soustraction' }).click();
                    await page.getByRole('button', { name: '9' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('-4');
                });
                test('substract negative number by positive number', async ({ page }) => {
                    await page.getByRole('button', { name: '5' }).click();
                    await page.getByRole('button', { name: 'soustraction' }).click();
                    await page.getByRole('button', { name: '9' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await page.getByRole('button', { name: 'soustraction' }).click();
                    await page.getByRole('button', { name: '6' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('-3');
                });
            });
            test.describe('multiplication operations', () => {
                test('multiply number by 0', async ({ page }) => {
                    await page.getByRole('button', { name: '8' }).click();
                    await page.getByRole('button', { name: 'multiplication' }).click();
                    await page.getByRole('button', { name: '0' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('0');
                });
                test('simply multiplication', async ({ page }) => {
                    await page.getByRole('button', { name: '2' }).click();
                    await page.getByRole('button', { name: 'multiplication' }).click();
                    await page.getByRole('button', { name: '5' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('10');
                });
                test('complex multiplication', async ({ page }) => {
                    await page.getByRole('button', { name: '3' }).click();
                    await page.getByRole('button', { name: 'multiplication' }).click();
                    await page.getByRole('button', { name: '6' }).click();
                    await page.getByRole('button', { name: '7' }).click();
                    await page.getByRole('button', { name: '8' }).click();
                    await page.getByRole('button', { name: '=' }).click();
                    await expect(page.locator('.screen')).toHaveText('2034');
                });
            });
        });

        test('Reset calculator', async ({ page }) => {
            await page.getByRole('button', { name: '1' }).click();
            await page.getByRole('button', { name: 'sum' }).click();
            await page.getByRole('button', { name: '6' }).click();
            await page.getByRole('button', { name: '=' }).click();
            await page.getByRole('button', { name: 'C', exact: true }).click();
            await expect(page.locator('.screen')).toHaveText('0');
        });

        test('check equal button', async ({ page }) => {
            test('check equal button text', async ({ page }) => {
                await expect(page.locator('.screen')).toHaveText('=');
            });
            test('check equal button bg color', async ({ page }) => {
               await expect(page.locator('.screen')).toHaveCSS('background-color', 'red');
            });
        });
    });
});

