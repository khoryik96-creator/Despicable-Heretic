import { expect, test } from '@playwright/test';

const preview = '/Despicable-Heretic/react-preview.html';

test('deep-linked final chapter lazy-loads full prose and reader controls', async ({ page }) => {
  await page.goto(`${preview}#chapter/s55-e10`);
  await expect(page.locator('.reader-header')).toContainText('Season 55 · Chapter 10');
  await expect(page.locator('.reader-prose')).toContainText('Kaiven Rhoss survived.');
  await expect(page.locator('.skill-badge.supreme')).toHaveCount(4);
  await expect(page.locator('.reader-nav button').last()).toBeDisabled();
});

test('chapter archive exposes all seasons without loading every prose body', async ({ page }) => {
  await page.goto(`${preview}#chapters`);
  await expect(page.getByRole('heading', { name: 'Chapters' })).toBeVisible();
  await expect(page.locator('.season-card')).toHaveCount(55);
  await page.locator('select[aria-label="Season"]').selectOption('55');
  await expect(page.locator('.chapter-row')).toHaveCount(10);
  await page.locator('.chapter-row__open').first().click();
  await expect(page).toHaveURL(/#chapter\/s55-e1$/);
  await expect(page.locator('.reader-prose')).toContainText('Kaiven Rhoss attacked the Thousand Lantern Network with truth.');
  await page.locator('.reader-nav button').last().click();
  await expect(page).toHaveURL(/#chapter\/s55-e2$/);
});

test('bookmarks preserve the existing dhBookmarksV2 storage contract', async ({ page }) => {
  await page.goto(`${preview}#chapter/s1-e1`);
  await expect(page.locator('.reader-prose')).toContainText('royal dignity was caught on a thorn bush');
  await page.locator('.bookmark-toggle').click();
  await expect(page.locator('.bookmark-toggle')).toContainText('Bookmarked');
  const stored = await page.evaluate(() => window.localStorage.getItem('dhBookmarksV2'));
  expect(stored).toContain('s1-e1');

  await page.reload();
  await expect(page.locator('.bookmark-toggle')).toContainText('Bookmarked');
  await page.getByRole('button', { name: 'Bookmarks', exact: true }).first().click();
  await expect(page.locator('.bookmark-card')).toHaveCount(1);
});

test('Continue Reading preserves the existing dhLastReadV2 contract', async ({ page }) => {
  await page.goto(`${preview}#overview`);
  await page.evaluate(() => window.localStorage.setItem('dhLastReadV2', 's53-e7'));
  await page.reload();
  const continueButton = page.locator('.topbar__continue');
  await expect(continueButton).toContainText('Continue S53 Ch 7');
  await continueButton.click();
  await expect(page).toHaveURL(/#chapter\/s53-e7$/);
  await expect(page.locator('.reader-header')).toContainText('Season 53 · Chapter 7');
});

test('mobile navigation remains usable at phone width', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${preview}#overview`);
  await expect(page.locator('.mobile-tabs')).toBeVisible();
  await page.locator('.mobile-tabs').getByRole('button', { name: 'Chapters', exact: true }).click();
  await expect(page).toHaveURL(/#chapters$/);
  await page.locator('select[aria-label="Season"]').selectOption('55');
  await expect(page.locator('.chapter-row')).toHaveCount(10);
  await page.locator('.chapter-row__open').nth(9).click();
  await expect(page.locator('.reader-prose')).toContainText('Kaiven Rhoss survived.');
});
