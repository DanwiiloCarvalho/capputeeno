import { render, screen } from "@testing-library/react"
import { CartCount } from "."
import * as useLocalStorage from "@/hooks/useLocalStorage";


describe('CartCount', () => {
    it('should display the units correctly', async () => {

        vi.spyOn(useLocalStorage, 'useLocalStorage').mockReturnValue({
            units: 2,
            products: [],
            deleteCartProduct: vi.fn(),
            setCartProduct: vi.fn(),
            updateUnits: vi.fn()
        })

        render(
            <CartCount />
        )

        const units = await screen.findByText('2');
        expect(units.textContent).toBe('2');
    })
})