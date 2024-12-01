// redesPage.js
const { expect } = require('@playwright/test');
class RedesPage {
    constructor(page) {
      this.page = page;
      this.redesLink = page.getByRole('link', { name: 'Redes Redes' });
      this.locator1 = page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)');
      this.locator2 = page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)');
      this.locator3 = page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(4) > span:nth-child(2)');
    }
  
    async clickRedes() {
      const page1Promise = this.page.waitForEvent('popup');
      await this.redesLink.click();
      const page1 = await page1Promise;
      return page1;
    }
  
    async validateRedesTitle(page1) {
      await expect(page1).toHaveTitle(/Red X/);
    }
  
    async validateTextInLocators(page1) {
      await expect(this.locator1).toHaveText('VEN - CORINA MACHADO_1 - TW');
      await expect(this.locator2).toHaveText('VEN - Nicolás Maduro - TW');
      await expect(this.locator3).toHaveText('VEN - EDMUNDO GONZALEZ - TW');
    }
  }
  
  module.exports = { RedesPage };
  