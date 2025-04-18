import { fireEvent, render, screen } from "@testing-library/react"
import { FilterByCategory } from "."
import { AppContext } from "@/app/contexts/context-provider"
import { Category } from "@/enum/category";

const mockSetcategoryValue = vi.fn();

describe('FilterByCategory', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    })

    it('should send the category "ALL PRODUCTS" to the app context', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue }}>
                <FilterByCategory />
            </AppContext.Provider>
        )

        const filterByCategoryItems = await screen.findAllByRole('listitem');
        fireEvent.click(filterByCategoryItems[0]);

        expect(mockSetcategoryValue).toHaveBeenCalledTimes(1);
        expect(mockSetcategoryValue).toHaveBeenCalledWith(Category.ALL_PRODUCTS);
    });

    it('should send the category "TSHIRTS" to the app context', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue }}>
                <FilterByCategory />
            </AppContext.Provider>
        )

        const filterByCategoryItems = await screen.findAllByRole('listitem');
        fireEvent.click(filterByCategoryItems[1]);

        expect(mockSetcategoryValue).toHaveBeenCalledTimes(1);
        expect(mockSetcategoryValue).toHaveBeenCalledWith(Category.TSHIRTS);
    });

    it('should send the category "MUGS" to the app context', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue }}>
                <FilterByCategory />
            </AppContext.Provider>
        )

        const filterByCategoryItems = await screen.findAllByRole('listitem');
        fireEvent.click(filterByCategoryItems[2]);

        expect(mockSetcategoryValue).toHaveBeenCalledTimes(1);
        expect(mockSetcategoryValue).toHaveBeenCalledWith(Category.MUGS);
    });

    it('should select "TODOS OS PRODUTOS" if category is Category.ALL_PRODUCTS', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue, categoryValue: Category.ALL_PRODUCTS }}>
                <FilterByCategory />
            </AppContext.Provider>
        )
    });

    it('should select "CAMISETAS" if category is Category.TSHIRTS', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue, categoryValue: Category.TSHIRTS }}>
                <FilterByCategory />
            </AppContext.Provider>
        )
    });

    it('should select "CANECAS" if category is Category.MUGS', async () => {
        render(
            <AppContext.Provider value={{ setCategoryValue: mockSetcategoryValue, categoryValue: Category.MUGS }}>
                <FilterByCategory />
            </AppContext.Provider>
        )
    });
})