import { AppContext } from "@/app/contexts/context-provider";
import * as useLocalStorage from '@/hooks/useLocalStorage';
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { CartItem } from ".";

const mockCartProductItem = {
    category: 'mug',
    name: 'Caneca Never settle',
    price_in_cents: 4592,
    sales: 10,
    id: '1',
    image_url: 'image_url',
    description: 'Nemo debeo aequus baiulus celer vulticulus reprehenderit deleniti. Vae spiritus corroboro qui cauda sortitus acerbitas ex varietas. Advoco decet ubi veritatis comminor territo tandem absens capillus.',
    units: 2
}

const mockUpdateUnits = vi.fn();

describe('CartItem', () => {
    it('should have a title with the name product', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: [],
            deleteCartProduct: vi.fn(),
            units: 0,
            updateUnits: mockUpdateUnits,
            setCartProduct: vi.fn()
        })

        vi.mock('next/image', () => {
            return {
                default: vi.fn().mockImplementation(({ priority = true, ...props }: ComponentProps<'img'> & { priority: boolean }) => {
                    // eslint-disable-next-line @next/next/no-img-element
                    return <img alt='' {...props} />
                })
            }
        })

        render(
            <AppContext.Provider value={{ updateUnits: mockUpdateUnits }}>
                <CartItem {...mockCartProductItem} />
            </AppContext.Provider>
        );

        const title = await screen.findByRole('heading');
        expect(title.textContent).toBe(mockCartProductItem.name);
    })

    it('should change product quantity when choose the quantity of the product', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: [],
            deleteCartProduct: vi.fn(),
            units: 0,
            updateUnits: mockUpdateUnits,
            setCartProduct: vi.fn()
        })

        vi.mock('next/image', () => {
            return {
                default: vi.fn().mockImplementation(({ priority = true, ...props }: ComponentProps<'img'> & { priority: boolean }) => {
                    // eslint-disable-next-line @next/next/no-img-element
                    return <img alt='' {...props} />
                })
            }
        })

        render(
            <AppContext.Provider value={{ updateUnits: mockUpdateUnits }}>
                <CartItem {...mockCartProductItem} />
            </AppContext.Provider>
        );

        const select = await screen.findByRole('combobox');
        await userEvent.selectOptions(select, '4');
        
        expect(mockUpdateUnits).toBeCalledWith(mockCartProductItem.id, 4);
    })
})