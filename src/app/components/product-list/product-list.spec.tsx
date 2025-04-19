import { AppContext } from "@/app/contexts/context-provider";
import { Category } from "@/enum/category";
import { Priority } from "@/enum/priority";
import { useProducts } from '@/hooks/useProducts';
import { render, screen } from "@testing-library/react";
import { ProductList } from ".";
import { Mock } from "vitest";
import { useSearchBar } from "@/hooks/useSearchBar";

const mockProductList = [
    {
        category: "t-shirts",
        name: "Camiseta Broken Saints",
        price_in_cents: 3562,
        sales: 10,
        id: "1",
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fuga, nulla voluptatum consequatur veniam delectus repellat. Molestias quam fugiat ad?"
    },
    {
        category: "mugs",
        name: "Caneca The Grounds",
        price_in_cents: 4230,
        sales: 5,
        id: "2",
        image_url: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fuga, nulla voluptatum consequatur veniam delectus repellat. Molestias quam fugiat ad?"
    }
]

vi.mock('@/hooks/useProducts');
vi.mock('@/hooks/useSearchBar');

describe('ProductList', () => {
    it('should render the ProductList if isLoading is false', async () => {

        const contextValues = {
            categoryValue: Category.MUGS,
            priority: Priority.BEST_SELLERS,
            searhBarValue: ''
        };

        (useProducts as Mock).mockReturnValue({
            data: mockProductList,
            isLoading: false
        });

        (useSearchBar as Mock).mockReturnValue({
            filteredValue: mockProductList
        })

        render(
            <AppContext.Provider value={{ ...contextValues }}>
                <ProductList />
            </AppContext.Provider>
        );

        const productList = await screen.findByRole('list');
        expect(productList).toBeInTheDocument();
        expect(productList).toBeVisible();
    });

    it('should render the skeleton screen if isLoading is true', async () => {

        const contextValues = {
            categoryValue: Category.MUGS,
            priority: Priority.BEST_SELLERS,
            searhBarValue: ''
        };

        (useProducts as Mock).mockReturnValue({
            data: mockProductList,
            isLoading: true
        });

        (useSearchBar as Mock).mockReturnValue({
            filteredValue: mockProductList
        })

        const { container } = render(
            <AppContext.Provider value={{ ...contextValues }}>
                <ProductList />
            </AppContext.Provider>
        );

        expect(container).not.toHaveRole('list');
    });
})