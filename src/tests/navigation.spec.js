import { test, expect } from '@playwright/test';

test.describe('navigation mellan sidor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });


  test('användare kan gå mellan tre avdelningarna: "katalog", "lägg till bok" och "mina böcker"', async ({ page }) => {

//going to lägg till bok
    const addBookButton = page.getByRole('button', { name: 'lägg till bok' });
    await expect(addBookButton).toBeEnabled();
    await addBookButton.click();


    const addNewBookButton = page.getByRole('button', { name: 'lägg till ny bok' });
     await expect(addNewBookButton).toBeVisible({ timeout: 500 });


  });
});

