import { test, expect } from '@playwright/test';

test.describe('mina böcker', () => {
	//going to project
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
});
test ('användaren ser ett meddelande om inga favoritböcker finns(tom)',async({page})=>{
	//  klicka på mina böcker btn
	const myBooksButton =page.getByRole('button',{name:'mina böcker'});
	await expect(myBooksButton).toBeEnabled({timeout:500});
	await myBooksButton.click();
 // vänta att meddelandet visas i sidan när det finns inga favoritböcker
	const defaultMessage=page.getByText(/När du valt, kommer dina favoritböcker att visas här/i);
	await expect(defaultMessage).toBeVisible({timeout:500});

});
});
