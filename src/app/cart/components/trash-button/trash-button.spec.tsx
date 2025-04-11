import { fireEvent, render, screen } from "@testing-library/react";
import * as useLocalStorage from "@/hooks/useLocalStorage";
import { TrashButton } from ".";

const mockDeleteCartProduct = vi.fn();

describe('TrashButton', () => {
    it('should delete the product from cart', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            products: [],
            deleteCartProduct: mockDeleteCartProduct,
            units: 5,
            updateUnits: vi.fn(),
            setCartProduct: vi.fn()
        })

        render(
            <TrashButton cartItemId="2" />
        );

        const trashButton = await screen.findByRole('button');

        fireEvent.click(trashButton);

        expect(mockDeleteCartProduct).toBeCalledWith('2')
    })
})