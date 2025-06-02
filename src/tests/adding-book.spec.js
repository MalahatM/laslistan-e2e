import { test, expect } from '@playwright/test';

test.describe('lägg till bok till katalog', () => {
	//going to project
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');

	//click the btn to go to (lägg till bok form)
    const addBookButton = page.getByRole('button', { name: 'lägg till bok' });
    await expect(addBookButton).toBeEnabled({ timeout: 500 });
    await addBookButton.click();

//att vara säkra för visibilitiet
    const titleInput = page.getByTestId('add-input-title');
    await expect(titleInput).toBeVisible({ timeout: 500 });
  });
    test('användare kan lägga till en ny bok och se den i katalogen', async ({ page }) => {
		//1. Fyll i titel
    const titleInput = page.getByTestId('add-input-title');
    await expect(titleInput).toBeVisible({ timeout: 500 });
    await titleInput.fill('chokolat');
	//2.fyll för författare
	 const writerInput = page.getByTestId('add-input-author');
     await expect(writerInput).toBeVisible({ timeout: 500 });
     await writerInput.fill('Sussanna');
 //3. Klicka på "lägg till ny bok"
     const submitButton = page.getByRole('button', { name: 'lägg till ny bok' });
     await expect(submitButton).toBeEnabled({ timeout: 500 });
     await submitButton.click();
	 //4.vänta lite för att alla ändringarna fixat.
	 await page.waitForTimeout(1000);
	 // 5. Gå tillbaka till Katalog
  const katalogButton = page.getByRole('button', { name: 'katalog' });
  await expect(katalogButton).toBeEnabled({ timeout: 500 });
  await katalogButton.click();

 
});
});