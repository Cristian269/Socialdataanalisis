// dashboardPage.js

const { expect } = require('@playwright/test');
class DashboardPage {
    constructor(page) {
      this.page = page;
      this.socialListeningLink = page.getByRole('link', { name: 'Social Listening & Analítica' });
    }
  
    async validateSocialListening() {
      await expect(this.socialListeningLink).toContainText('Social Listening & Analítica');
    }
  
    async clickSocialListening() {
      await this.socialListeningLink.click();
    }
  }
  
  module.exports = { DashboardPage };
  