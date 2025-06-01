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


//going to mina böcker
 test('användaren kan navigera till mina böcker', async ({ page }) => {
  const myBooksButton = page.getByRole('button', { name: 'mina böcker' });
  await expect(myBooksButton).toBeEnabled();
  await myBooksButton.click();

  const emptyMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
  await expect(emptyMessage).toBeVisible({ timeout: 500 });
});

//back to katalog
test('användaren kan navigera tillbaka till katalog', async ({ page }) => {
  // going ti mina bocker because of katalog btn becomes activ
  const myBooksButton = page.getByRole('button', { name: 'mina böcker' });
  await expect(myBooksButton).toBeEnabled();
  await myBooksButton.click();

   //katalog btn is active now
  const katalogButton = page.locator('[data-testid="catalog"]');
  await expect(katalogButton).toBeEnabled();
  await katalogButton.click();

  // list of books
  const books = page.locator('.book');
  await expect(books.first()).toBeVisible();
});

});




