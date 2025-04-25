import { test, expect } from '@playwright/test';

test.describe('Interactions with the product cart', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');

        const productCard = page.locator('section > ul > li').nth(0);

        await productCard.click();
    })

    test('It should have a button that adds the product to the cart', async ({ page }) => {
        const addToCartButton = page.getByRole('button', {
            name: 'adicionar ao carrinho'
        });

        await expect(addToCartButton).toBeVisible();
    });

    test('It should add the product to the cart', async ({ page }) => {
        const addToCartButton = page.getByRole('button', {
            name: 'adicionar ao carrinho'
        });

        await addToCartButton.click();

        await expect(page.locator('header > div > a > span')).toHaveText("1");
    });

    test('It should remove the product from cart', async ({ page }) => {
        const addToCartButton = page.getByRole('button', {
            name: 'adicionar ao carrinho'
        });

        await addToCartButton.click();

        await page.locator('header > div > a').click();

        await page.locator('ul > li button').click();

        expect(await page.locator('ul li').count()).toBe(0);

        await expect(page.locator('header > div > a > span')).not.toBeVisible();
    });

    test('It should change units of the product in the cart', async ({ page }) => {
        const addToCartButton = page.getByRole('button', {
            name: 'adicionar ao carrinho'
        });

        await addToCartButton.click();

        await page.locator('header > div > a').click();

        await page.locator('ul > li > article select').click();

        await page.locator('ul > li > article select').selectOption('4');

        await expect(page.locator('header > div > a > span')).toHaveText('4');
    });
});