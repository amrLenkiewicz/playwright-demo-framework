import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { testUsers } from '../../test-data/users';

test.describe('Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLogin();
    });

    test('should login with valid credentials', async ({ page }) => {
        await loginPage.login(testUsers.standard.email, testUsers.standard.password);
        await expect(page).toHaveURL('/#/search')
    })

    test('should login button should be disabled if inputs are empty', async ({ page }) => {
        expect(await loginPage.isLoginButtonDisabled()).toBe(true);
    })

    test('should error appear if wrong password', async ({ page }) => {
        await loginPage.login(testUsers.standard.email, 'dupa123');
        expect(await loginPage.getErrorMessage()).toBe('Invalid email or password.');
    })
})