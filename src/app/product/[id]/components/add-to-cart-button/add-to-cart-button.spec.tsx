import { fireEvent, render, screen } from "@testing-library/react";
import * as useLocalStorage from '@/hooks/useLocalStorage';
import { AddToCartButton } from ".";
import { Product } from "@/types/product";
import { AppContext } from "@/app/contexts/context-provider";

const mockProduct = {
    category: 'mug',
    name: 'Caneca Never settle',
    price_in_cents: 4592,
    sales: 10,
    id: '1',
    image_url: 'image_url',
    description: 'Nemo debeo aequus baiulus celer vulticulus reprehenderit deleniti. Vae spiritus corroboro qui cauda sortitus acerbitas ex varietas. Advoco decet ubi veritatis comminor territo tandem absens capillus.'
}

const mockSetCartProduct = vi.fn();

describe('AddToCartButton', () => {
    it('should have a text that says "Adicionar ao carrinho"', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: [],
            deleteCartProduct: vi.fn(),
            units: 0,
            updateUnits: vi.fn(),
            setCartProduct: mockSetCartProduct
        })

        render(
            <AppContext.Provider value={{ setProducts: mockSetCartProduct }}>
                <AddToCartButton product={mockProduct} />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button', {
            name: 'Adicionar ao carrinho'
        });

        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
    })

    it('should add the product to the cart', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: [],
            deleteCartProduct: vi.fn(),
            units: 0,
            updateUnits: vi.fn(),
            setCartProduct: mockSetCartProduct
        })

        render(
            <AppContext.Provider value={{ setProducts: mockSetCartProduct }}>
                <AddToCartButton product={mockProduct} />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button', {
            name: 'Adicionar ao carrinho'
        });

        fireEvent.click(button);

        expect(mockSetCartProduct).toBeCalledTimes(1);
        expect(mockSetCartProduct).toBeCalledWith(mockProduct);
    })
})