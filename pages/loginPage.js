// loginPage.js
const { expect } = require('@playwright/test');
class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByPlaceholder('Correo electrónico o usuario');
      this.passwordInput = page.getByPlaceholder('Contraseña');
      this.loginButton = page.getByRole('button', { name: 'Ingresar' });
    }
  
    async goto() {
      await this.page.goto('https://test.qsocialnow.com/login');
    }
  
    async login(username, password) {
      await this.emailInput.fill(username);
      await this.emailInput.press('Enter');
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  
  module.exports = { LoginPage };
  