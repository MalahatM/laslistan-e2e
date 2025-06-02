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
});
});