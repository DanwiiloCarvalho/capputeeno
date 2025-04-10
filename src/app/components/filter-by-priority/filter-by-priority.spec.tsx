import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { FilterByPriority } from "."
import { AppContext } from "@/app/contexts/context-provider";
import { Priority } from "@/enum/priority";

const mockSetPriorityValue = vi.fn();

describe('FilterByPriority', () => {
    it('should display a text thats says "Organizar por"', async () => {
        render(
            <FilterByPriority />
        );

        const label = await screen.findByText("Organizar por");
        expect(label).toBeInTheDocument();
    })

    it('should open the FilterByPriority when it is clicked', async () => {
        render(
            <FilterByPriority />
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).toHaveLength(4)
        expect(listItems[0]).toHaveTextContent('Novidades')
        expect(listItems[1]).toHaveTextContent('Preço: Maior - menor')
        expect(listItems[2]).toHaveTextContent('Preço: Menor - maior')
        expect(listItems[3]).toHaveTextContent('Mais vendidos')
    })

    it('should change the priority value to the NEWS value', async () => {
        render(
            <AppContext.Provider value={{ setPriorityValue: mockSetPriorityValue }}>
                <FilterByPriority />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent('Novidades');

        fireEvent.click(listItems[0])

        expect(mockSetPriorityValue).toHaveBeenCalledWith(Priority.NEWS);
    })

    it('should change the priority value to the LARGE_TO_SMALLER value', async () => {
        render(
            <AppContext.Provider value={{ setPriorityValue: mockSetPriorityValue }}>
                <FilterByPriority />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems[1]).toHaveTextContent('Preço: Maior - menor');

        fireEvent.click(listItems[1])

        expect(mockSetPriorityValue).toHaveBeenCalledWith(Priority.LARGER_TO_SMALLER);
    })

    it('should change the priority value to the SMALLER_TO_LARGER value', async () => {
        render(
            <AppContext.Provider value={{ setPriorityValue: mockSetPriorityValue }}>
                <FilterByPriority />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems[2]).toHaveTextContent('Preço: Menor - maior');

        fireEvent.click(listItems[2])

        expect(mockSetPriorityValue).toHaveBeenCalledWith(Priority.SMALLER_TO_LARGER);
    })

    it('should change the priority value to the BEST_SELLERS value', async () => {
        render(
            <AppContext.Provider value={{ setPriorityValue: mockSetPriorityValue }}>
                <FilterByPriority />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems[3]).toHaveTextContent('Mais vendidos');

        fireEvent.click(listItems[3])

        expect(mockSetPriorityValue).toHaveBeenCalledWith(Priority.BEST_SELLERS);
    })

    it('should change the priority value to the BEST_SELLERS value', async () => {
        render(
            <AppContext.Provider value={{ setPriorityValue: mockSetPriorityValue }}>
                <FilterByPriority />
            </AppContext.Provider>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const listItems = await screen.findAllByRole('listitem');
        expect(listItems[3]).toHaveTextContent('Mais vendidos');

        fireEvent.click(listItems[3])

        expect(mockSetPriorityValue).toHaveBeenCalledWith(Priority.BEST_SELLERS);
    })

    it('should close the FilterByPriority when clicking outside', async () => {
        render(
            <>
                <FilterByPriority />
                <div data-testid="outside"></div>
            </>
        );

        const button = await screen.findByRole('button');
        fireEvent.click(button);

        const list = await screen.findByRole('list');
        expect(list).toBeInTheDocument();

        const outside = await screen.findByTestId('outside');
        fireEvent.click(outside);

        expect(list).not.toBeInTheDocument();
    })
})