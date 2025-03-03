//Qsocial
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/loginPage');
const { DashboardPage } = require('./pages/dashboardPage');
const { RedesPage } = require('./pages/redesPage');

test('Validacion de filtrado en redes', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page); //los andes , gob
  const redesPage = new RedesPage(page);

  // Navegar a la página de inicio de sesión e iniciar sesión
  await loginPage.goto();
  await loginPage.login('vzla', '123456');

  // Validar y navegar a Social Listening
  await dashboardPage.validateSocialListening();
  await dashboardPage.clickSocialListening();

  // Validar y navegar a Redes
  const page1 = await redesPage.clickRedes();
  await redesPage.validateRedesTitle(page1);

  // Validar los textos en los localizadores
  await redesPage.validateTextInLocators(page1);

  // Interacción adicional
  await page1.locator('#mui-component-select-serie').click();
  await page1.getByRole('option', { name: 'VEN - CORINA MACHADO_1 - TW' }).getByRole('checkbox').check();
  await page1.locator('#menu-serie > .MuiBackdrop-root').click();
  
  await page1.click('xpath=//button[@type="submit"]');

  // Verificar que el texto específico esté presente o ausente
  const bodyText = await page1.textContent('body');
  await expect(bodyText).toContain('CORINA MACHADO');
  await expect(bodyText).not.toContain('EDMUNDO');
  await expect(bodyText).not.toContain('Nicolas Maduro');
});
