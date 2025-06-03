import { test, expect } from '@playwright/test';

test.describe('mina böcker', () => {
	//going to project
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
});
//1.test när finns inget favoritmarkering
test ('användaren ser ett meddelande om inga favoritböcker finns(tom)',async({page})=>{
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

  
});
});

