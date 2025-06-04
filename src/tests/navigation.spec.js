import { test, expect } from '@playwright/test';

test.describe('navigation mellan sidor', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	
	//1.going to lägg till bok
	test('användaren kan navigera till lägg till bok', async ({ page }) => {
		
		
		const addBookButton = page.getByRole('button', { name: 'lägg till bok' });
		await expect(addBookButton).toBeEnabled();
		await addBookButton.click();
		
		
		const addNewBookButton = page.getByRole('button', { name: 'lägg till ny bok' });
		await expect(addNewBookButton).toBeVisible({ timeout: 500 });
	});
	
	
	//2.going to mina böcker
	test('användaren kan navigera till mina böcker', async ({ page }) => {
		const myBooksButton = page.getByRole('button', { name: 'mina böcker' });
		await expect(myBooksButton).toBeEnabled();
		await myBooksButton.click();
		
		const emptyMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
		await expect(emptyMessage).toBeVisible({ timeout: 500 });
	});
	
	//3.back to katalog from mina böcker
	test('användaren kan navigera tillbaka till katalog', async ({ page }) => {
		// going ti mina bocker because of katalog btn becomes activ
		const myBooksButton = page.getByRole('button', { name: 'mina böcker' });
		await expect(myBooksButton).toBeEnabled();
		await myBooksButton.click();
		
		//katalog btn is active now
		const katalogButton = page.getByRole('button', { name: 'katalog' });
		await expect(katalogButton).toBeEnabled();
		await katalogButton.click();
		
		// list of books
		const books = page.locator('.book');
		await expect(books.first()).toBeVisible();
	});
	
	//4.back to katalog from lägg till bok
	test('användare kan navigera från lägg till bok till katalog', async ({ page }) => {
		
		const addBookBtn = page.getByRole('button', { name: 'lägg till bok'});
		await expect(addBookBtn).toBeEnabled();
		await addBookBtn.click();
		//lägg till bok is activ now
		const addNewBookForm = page.getByRole('button', { name: 'lägg till ny bok' });
		await expect(addNewBookForm).toBeVisible();
		
		
		const katalogBtn = page.getByRole('button', { name: 'katalog' });
		await expect(katalogBtn).toBeEnabled();
		await katalogBtn.click();
		//list of books
		const books = page.locator('.book');
		await expect(books.first()).toBeVisible();
	});
	
});




