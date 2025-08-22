import { expect, test } from '@playwright/test';

test('ContextMenu 실행 테스트', async ({ page }) => {
  await page.goto('http://localhost:5173/context-menu-test');
  await page.getByText('test7').click({
    button: 'right',
  });
  await expect(page.getByTestId('context-menu-default-test')).toBeVisible();
});
