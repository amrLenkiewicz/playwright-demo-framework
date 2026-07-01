import { Page, Locator } from "@playwright/test"

export class LoginPage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly rememberMeCheckbox: Locator;
    private readonly forgotPasswordLink: Locator;
    private readonly notYetACustomerLink: Locator;
    private readonly loginWithGoogle: Locator;

    constructor(private readonly page: Page) {
        this.page = page
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.rememberMeCheckbox = page.getByLabel('Remember me');
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
        this.notYetACustomerLink = page.getByRole('link', { name: 'Not yet a customer?' });
        this.loginWithGoogle = page.getByRole('button', { name: 'Log in with Google' });
    }

    async goToLogin() {
        await this.page.goto('/#/login');
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async checkRememberMe() {
        await this.rememberMeCheckbox.check()
    }

    async uncheckRememberMe() {
        await this.rememberMeCheckbox.uncheck()
    }
}