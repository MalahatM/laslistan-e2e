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
		
		// 4. Gå tillbaka till Katalog
		const katalogButton = page.getByRole('button', { name: 'katalog' });
		await expect(katalogButton).toBeEnabled({ timeout: 500 });
		await katalogButton.click();
		// 5. Kontrollera att boken syns i listan
		await expect(page.locator('text=chokolat')).toBeVisible({ timeout: 1000 });
		await expect(page.locator('text=Sussanna')).toBeVisible({ timeout: 1000 });
		
	});
	// lägga till flera bok samtidigt & (olika språk)
	test('användaren kan lägga till flera olika böcker med titel och författare', async ({ page }) => {
		
		const läggTillBok = async (titel, författare) => {
			await page.getByTestId('add-input-title').fill(titel);
			await page.getByTestId('add-input-author').fill(författare);
			
			const submitButton = page.getByRole('button', { name: 'lägg till ny bok' });
			await expect(submitButton).toBeEnabled();
			await submitButton.click();
		};
		
		// första bok(Svenska)
		await läggTillBok("Stjärna på himlen", "Alex Björn");
		//andra bok(Engelska)
		await läggTillBok("Science About Body", "Jack Jordan");
		//tredje bok(Persiska)
		await läggTillBok(" کتاب خنده‌دار", " ملاحت")
		
		// gå tillbaka till katalog
		const katalogButton = page.getByRole('button', { name: 'katalog' });
		await expect(katalogButton).toBeEnabled();
		await katalogButton.click();
		//kontrollera om böckerna ar synlig i katalog
		await expect(page.locator('text=Stjärna på himlen')).toBeVisible();
		await expect(page.locator('text=Alex Björn')).toBeVisible();
		await expect(page.locator('text=Science About Body')).toBeVisible();
		await expect(page.locator('text=Jack Jordan')).toBeVisible();
		await expect(page.locator('text=کتاب خنده‌دار')).toBeVisible();
		await expect(page.locator('text=ملاحت')).toBeVisible();
	});
	
	test('Btn lägg till ny bok ska inte vara aktiv om titel eller författare saknas', async ({ page }) => {
		
		// först fyll i endast titel
		const titleInput = page.getByTestId('add-input-title');
		await titleInput.fill('maten var fantastik');
		
		const submitButton = page.getByRole('button', { name: 'lägg till ny bok' });
		
		// Ska vara inaktiv eftersom författare saknas
		await expect(submitButton).toBeDisabled();
		
		// Sen tabort titel och fyll bara i författare
		await titleInput.fill('');
		const writerInput = page.getByTestId('add-input-author');
		await writerInput.fill('malahat mortezavi');
		
		// Fortfarande ska btn vara inaktiv
		await expect(submitButton).toBeDisabled();
	});
	
	
});