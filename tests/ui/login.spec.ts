import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';

test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLogin();
    });

    test('should login with valid credentials', async ({ page }) => {
        await loginPage.login('test@test.com', 'Test1234!');
        await expect(page).toHaveURL('/#/search')
    })
})