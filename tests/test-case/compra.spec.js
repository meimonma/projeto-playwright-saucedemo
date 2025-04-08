const { test, expect } = require('@playwright/test');

test('Fluxo completo de compra - Saucedemo', async ({ page }) => {
  // Acessa o site
  await page.goto('https://www.saucedemo.com/');

  // Login com usuário válido
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Valida URL de sucesso
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Adiciona produto ao carrinho
  await page.click('text=Sauce Labs Backpack');
  await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');
  await page.click('button:has-text("Add to cart")');

  // Vai para o carrinho
  await page.click('.shopping_cart_link');

  // Valida item no carrinho
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Inicia checkout
  await page.click('button:has-text("Checkout")');

  // Preenche dados
  await page.fill('#first-name', 'Maria');
  await page.fill('#last-name', 'Silva');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Valida resumo da compra e finaliza
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  await page.click('#finish');

  // Valida mensagem final
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Evidência final
  await page.screenshot({ path: 'tests/evidencias/fluxo-completo.png' });
});
