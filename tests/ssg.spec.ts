import { expect, test } from '@playwright/test'

test('SSG', async ({ page }) => {
  await page.goto('/about')
  await expect(
    page.getByRole('heading', { name: 'About this app' })
  ).toBeVisible()

  await page.goto('/')
  await expect(
    page.getByText('try editing src/routes/+page.svelte')
  ).toBeVisible()
  await page.getByLabel('Increase the counter by one').click()
  await expect(page.getByText('2')).toBeVisible()
})
