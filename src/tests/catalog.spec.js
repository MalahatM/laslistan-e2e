import { test, expect } from '@playwright/test';

test.describe('katalog sidan', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	//1. Kontrollera titel och beskrivning
	test('användaren ser innehållet i katalogsidan korrekt', async ({ page }) => {
		await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible();
		await expect(page.getByText('Sidan för dig som gillar att läsa. Välj dina favoriter.')).toBeVisible();
		// Kontrollera att Katalog Btn är synlig men inaktiv
		const katalogButton = page.getByRole('button', { name: 'katalog' });
		await expect(katalogButton).toBeVisible();
		await expect(katalogButton).toBeDisabled();
		// Kontrollera att det finns books
		const books = page.locator('.book');
		expect(await books.count()).toBeGreaterThan(0);
	});
	
	//2.välja första stärna av böckerna och vara säkra att visiblitiet.
	test('användaren kan markera sin favorit bok i katalog', async ({ page }) => {
		const firstStar = page.locator('.book .star').first();
		await expect(firstStar).toBeVisible();
		
		//Kontrollerar att välja en bok som är favorit kan ändra stjärnans klass
		const initialClass = await firstStar.getAttribute('class');
		await firstStar.click();
		const newClass = await firstStar.getAttribute('class');
		
		expect(newClass).not.toBe(initialClass);
	});
	
	test('användaren kan ta bort en bok från sina favoriter', async ({ page }) => {
		// hitta favorit btn
		const star = page.locator('.book .star').first();
		const originalClass = await star.getAttribute('class');
		
		//klicka på btn för favoritmarkera 
		await star.click();
		//Säkerställ att klassen ändras efter att boken markerats som favorit
		const favoritedClass = await star.getAttribute('class');
		expect(favoritedClass).not.toBe(originalClass);
		
		// klicka andra gången på stjärnan för att ta bort favoriten
		await star.click();
		
		// återställa klassen till initial
		const finalClass = await star.getAttribute('class');
		expect(finalClass).toBe(originalClass);
	});
	
});
