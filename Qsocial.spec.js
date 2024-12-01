const { test, expect } = require('@playwright/test');

test('Validacion de filtrado en redes', async ({ page }) => {
  await page.goto('https://test.qsocialnow.com/login');
  await page.getByPlaceholder('Correo electrónico o usuario').fill('vzla');
  await page.getByPlaceholder('Correo electrónico o usuario').press('Enter');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('123456');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.getByRole('link', { name: 'Social Listening & Analítica' }).click();
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Redes Redes' }).click();
  const page1 = await page1Promise;

  // Localizadores de los elementos
  const locator1 = page1.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)');
  const locator2 = page1.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(3) > span:nth-child(2)');
  const locator3 = page1.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1) > foreignobject:nth-child(1) > div:nth-child(1) > div:nth-child(4) > span:nth-child(2)');
  await page1.waitForLoadState('domcontentloaded');
  // Validaciones de texto
  await expect(locator1).toHaveText('VEN - CORINA MACHADO_1 - TW'); // valida que esté el texto
  await expect(locator2).toHaveText('VEN - Nicolás Maduro - TW'); // valida que esté el texto
  await expect(locator3).toHaveText('VEN - EDMUNDO GONZALEZ - TW'); // valida que esté el texto
  
  await page1.locator('#mui-component-select-serie').click();
  await page1.getByRole('option', { name: 'VEN - CORINA MACHADO_1 - TW' }).getByRole('checkbox').check();
  await page1.locator('#menu-serie > .MuiBackdrop-root').click();
  
  await page1.click('xpath=//button[@type="submit"]');
  
  //await page1.waitForLoadState('networkidle'); // o 'domcontentloaded'
  await page1.waitForLoadState('domcontentloaded');
  await page1.waitForTimeout(13000);
  
  // Pausa para inspección
  await page1.pause();
  
  // Verificar que el texto específico no esté en la página
  const bodyText = await page1.textContent('body');
  await expect(bodyText).toContain('CORINA MACHADO'); // Validar que no contenga este texto
  await expect(bodyText).not.toContain('EDMUNDO'); // Validar que no contenga este texto
  await expect(bodyText).not.toContain('Nicolas Maduro');
});
