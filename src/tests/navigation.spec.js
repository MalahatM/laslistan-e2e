import { test, expect } from '@playwright/test';

test.describe('Läslistan app', () => {
  test.beforeEach(async ({ page }) => {

    await page.goto('/');
  });

});