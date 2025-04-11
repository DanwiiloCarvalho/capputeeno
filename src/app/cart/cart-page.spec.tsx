import * as useLocalStorage from '@/hooks/useLocalStorage';
import { render, screen } from "@testing-library/react";
import CartPage from "./page";

const mockProductList = [
    {
        category: "t-shirts",
        name: "Camiseta Broken Saints",
        price_in_cents: 3562,
        sales: 10,
        id: "1",
        units: 2,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fuga, nulla voluptatum consequatur veniam delectus repellat. Molestias quam fugiat ad?"
    },
    {
        category: "mugs",
        name: "Caneca The Grounds",
        price_in_cents: 4230,
        sales: 5,
        id: "2",
        units: 3,
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fuga, nulla voluptatum consequatur veniam delectus repellat. Molestias quam fugiat ad?"
    }
]

describe('CartPage', () => {
    it('should display the Cart page', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: mockProductList,
            deleteCartProduct: vi.fn(),
            units: 5,
            updateUnits: vi.fn(),
            setCartProduct: vi.fn()
        })

        render(
            <CartPage />
        );

        const totalProducts = await screen.findByText('Total (5 produtos)');
        const subTotal = await screen.findAllByText('R$ 198,14');
        expect(totalProducts).toBeInTheDocument();
        expect(subTotal[0]).toBeInTheDocument();
    })
})