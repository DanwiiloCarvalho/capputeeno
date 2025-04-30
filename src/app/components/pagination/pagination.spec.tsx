import { fireEvent, render, screen } from "@testing-library/react"
import { Pagination } from "."
import userEvent from "@testing-library/user-event"
import { AppContext } from "@/app/contexts/context-provider"
import { Category } from "@/enum/category";

const mockSetCurrentPage = vi.fn();

describe('Pagination', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })

    it('should go to the correct page when a specific button is clicked', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage }}>
                <Pagination currentPage={0} totalPages={5} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');

        for (let i = 0; i < 5; i++) {
            await userEvent.click(buttons[i]);
            expect(mockSetCurrentPage).toHaveBeenCalledWith(i);
        }
    });

    it('should go back one page when the back button is clicked', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage }}>
                <Pagination currentPage={4} totalPages={5} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');

        await userEvent.click(buttons[5]);
        expect(mockSetCurrentPage).toHaveBeenCalledWith(3);
    })

    it('should not go back one page when current page is the first page', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage }}>
                <Pagination currentPage={0} totalPages={5} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');
        
        await userEvent.click(buttons[5]);
        expect(mockSetCurrentPage).not.toHaveBeenCalled();
    })

    it('should go the next page when the next button is clicked', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage }}>
                <Pagination currentPage={0} totalPages={5} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');
        
        await userEvent.click(buttons[6]);
        expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
    })

    it('should not go to the next page when the current page is the last page(All Products)', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage }}>
                <Pagination currentPage={4} totalPages={5} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');
        
        await userEvent.click(buttons[6]);
        expect(mockSetCurrentPage).not.toHaveBeenCalled();
    })

    it('should not go to the next page when the current page is the last page(T-shirts)', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage, categoryValue: Category.TSHIRTS }}>
                <Pagination currentPage={2} totalPages={3} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');
        
        await userEvent.click(buttons[4]);
        expect(mockSetCurrentPage).not.toHaveBeenCalled();
    })

    it('should not go to the next page when the current page is the last page(Mugs)', async () => {
        render(
            <AppContext.Provider value={{ setCurrentPage: mockSetCurrentPage, categoryValue: Category.MUGS }}>
                <Pagination currentPage={2} totalPages={3} />
            </AppContext.Provider>
        )

        const buttons = screen.getAllByRole('button');
        
        await userEvent.click(buttons[4]);
        expect(mockSetCurrentPage).not.toHaveBeenCalled();
    })
})