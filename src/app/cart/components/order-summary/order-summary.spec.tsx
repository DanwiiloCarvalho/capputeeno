import * as useLocalStorage from "@/hooks/useLocalStorage";
import { render, screen } from "@testing-library/react";
import * as calculatePropertiesProductSum from '@/utils/calculate-property-sum';
import { OrderSummary } from ".";

describe('OrderSummary', () => {
    it('should display title', async () => {

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
            <OrderSummary />
        );

        const title = await screen.findByRole('heading', {
            name: 'Resumo do pedido'
        });
        expect(title).toBeInTheDocument();
    })

    it('should display subTotal', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            units: 0,
            products: [],
            deleteCartProduct: vi.fn(),
            setCartProduct: vi.fn(),
            updateUnits: vi.fn()
        });

        vi.spyOn(calculatePropertiesProductSum, 'calculatePropertiesProductSum').mockReturnValue(0);

        render(
            <OrderSummary />
        );
    })

    it('should display the anchors "Ajuda", "Reembolsos, "Entregas e frete" and "Trocas e devoluções"', async () => {

        render(
            <OrderSummary />
        );

        const links = await screen.findAllByRole('link');
        expect(links[0].textContent).toBe('Ajuda');
        expect(links[1].textContent).toBe('Reembolsos');
        expect(links[2].textContent).toBe('Entregas e frete');
        expect(links[3].textContent).toBe('Trocas e devoluções');
    })

    it('should display the text "Subtotal de produtos"', async () => {

        render(
            <OrderSummary />
        );

        const text = await screen.findByText('Subtotal de produtos');
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();
    })

    it('should display the text "Entrega"', async () => {

        render(
            <OrderSummary />
        );

        const text = await screen.findByText('Entrega');
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();
    })
})