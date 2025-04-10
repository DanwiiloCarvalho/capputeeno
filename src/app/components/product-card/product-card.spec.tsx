import { render, screen } from '@testing-library/react'
import { ProductCard } from '.'
import { ComponentProps } from 'react'

const mockProduct = {
    name: "Camiseta Broken Saints",
    price_in_cents: 3562,
    image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg"
}

describe('ProductCard', async () => {
    it('should have a title which is the name of the product', async () => {
        render(
            <ProductCard {...mockProduct} />
        );

        const productName = await screen.findByRole('heading', {
            name: mockProduct.name
        })

        expect(productName.textContent).toBe(mockProduct.name);
    })

    it("should have the product's price", async () => {
        render(
            <ProductCard {...mockProduct} />
        );

        const productPrice = await screen.findByText(/^R\$\s?\d{1,3}(\.\d{3})*(,\d{2})?$/);
        expect(productPrice).toBeInTheDocument();
    })

    it("should have the product's image", async () => {

        vi.mock('next/image', () => {
            return {
                default: vi.fn().mockImplementation(({ priority = true, ...props }: ComponentProps<'img'> & { priority: boolean }) => {
                    // eslint-disable-next-line @next/next/no-img-element
                    return <img alt='' {...props} />
                })
            }
        })

        render(
            <ProductCard {...mockProduct} />
        );

        const productImage = await screen.findByRole('presentation');
        expect(productImage).toHaveAttribute('src', mockProduct.image_url);
    })
})