import { test, expect } from '@playwright/test';

test.describe('mina böcker', () => {
	//going to project
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	//1.test när finns inget favoritmarkering
	test ('Användaren ser ett meddelande om att det inte finns några favoritböcker (tom)',async({page})=>{
		//  klicka på mina böcker btn
		const myBooksButton =page.getByRole('button',{name:'mina böcker'});
		await expect(myBooksButton).toBeEnabled({timeout:500});
		await myBooksButton.click();
		// vänta att meddelandet visas i sidan när det finns inga favoritböcker
		const defaultMessage=page.getByText(/När du valt, kommer dina favoritböcker att visas här/i);
		await expect(defaultMessage).toBeVisible({timeout:500});
		
	});
	
	test('visar endast favoritböcker i mina böcker från katalog sidan)', async ({ page }) => {
		// navigerar till katalog 
		
		// markerar första boken som favorit
		const firstStar = page.locator('.book .star').first();
		await expect(firstStar).toBeVisible();
		await firstStar.click();
		
		//  går tillbaka till mina böcker page
		const myBooksButton = page.getByRole('button', { name: 'mina böcker' });
		await expect(myBooksButton).toBeEnabled();
		await myBooksButton.click();
		
		// verifierar att en bok visas
		const favoriteBooks = page.locator('.book');
		await expect(favoriteBooks.first()).toBeVisible();
		
		// meddelandet om tom favoritlista ska inte visas längre
		const defaultMessage = page.getByText(/när du valt, kommer dina favoritböcker att visas här/i);
		await expect(defaultMessage).not.toBeVisible();
	});
});

