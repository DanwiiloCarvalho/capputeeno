import * as useLocalStorage from "@/hooks/useLocalStorage";
import { render, screen } from "@testing-library/react";
import { CartIcon } from ".";

describe('CartIcon', () => {
    it('should display the CartCount when the quantity of products is greater than 0', async () => {
        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            units: 2,
            products: [
                {
                    category: 'mugs',
                    name: 'Caneca',
                    price_in_cents: 100,
                    sales: 10,
                    id: '1',
                    image_url: 'url_image',
                    description: 'description',
                    units: 1
                },
                {
                    category: 'mugs',
                    name: 'Caneca',
                    price_in_cents: 100,
                    sales: 10,
                    id: '2',
                    image_url: 'url_image',
                    description: 'description',
                    units: 1
                }
            ],
            deleteCartProduct: vi.fn(),
            setCartProduct: vi.fn(),
            updateUnits: vi.fn()
        });

        render(
            <CartIcon />
        );

        const units = await screen.findByText('2');
        expect(units).toBeInTheDocument();
    })
})