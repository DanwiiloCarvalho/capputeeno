import { AppContext } from '@/app/contexts/context-provider';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '.';

const mockSetSearchBarValue = vi.fn();

describe('SearchBar', () => {
    it('should have a placeholder that says "Procurando por algo específico?"', async () => {
        render(
            <SearchBar />
        )

        const productName = await screen.findByPlaceholderText('Procurando por algo específico?')

        expect(productName).toBeInTheDocument()
    })

    it('should check if when type a value into the input, the input receives this same value', async () => {

        render(
            <AppContext.Provider value={{ setSearchBarValue: mockSetSearchBarValue }}>
                <SearchBar />
            </AppContext.Provider>
        )

        const input = screen.getByPlaceholderText('Procurando por algo específico?');

        await userEvent.type(input, 'React');

        await waitFor(() => {
            expect(mockSetSearchBarValue).toHaveBeenCalledWith('React');
        })
    })
})