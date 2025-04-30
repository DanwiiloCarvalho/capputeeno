import { render } from "@testing-library/react"
import Home from "./page"
import { Category } from "@/enum/category";
import { Priority } from "@/enum/priority";
import { AppContext } from "./contexts/context-provider";
import { Mock } from "vitest";
import { useProducts } from "@/hooks/useProducts";
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

describe('Home component', () => {
    it('should render the Home component displaying the ALL PRODUCTS pagination', async () => {

        const contextValues = {
            categoryValue: Category.ALL_PRODUCTS,
            priority: Priority.BEST_SELLERS,
            searhBarValue: '',
            products: mockProductList
        };

        (useProducts as Mock).mockReturnValue({
            data: mockProductList,
            isLoading: true
        });

        (useSearchBar as Mock).mockReturnValue({
            filteredValue: mockProductList
        })

        render(
            <AppContext.Provider value={{ ...contextValues }}>
                <Home />
            </AppContext.Provider>
        )
    })

    it('should render the Home component displaying the MUGS pagination', async () => {

        const contextValues = {
            categoryValue: Category.MUGS,
            priority: Priority.BEST_SELLERS,
            searhBarValue: '',
            products: mockProductList
        };

        (useProducts as Mock).mockReturnValue({
            data: mockProductList,
            isLoading: true
        });

        (useSearchBar as Mock).mockReturnValue({
            filteredValue: mockProductList
        })

        render(
            <AppContext.Provider value={{ ...contextValues }}>
                <Home />
            </AppContext.Provider>
        )
    })

    it('should render the Home component displaying the T-SHIRTS pagination', async () => {

        const contextValues = {
            categoryValue: Category.MUGS,
            priority: Priority.BEST_SELLERS,
            searhBarValue: '',
            products: mockProductList
        };

        (useProducts as Mock).mockReturnValue({
            data: mockProductList,
            isLoading: true
        });

        (useSearchBar as Mock).mockReturnValue({
            filteredValue: mockProductList
        })

        render(
            <AppContext.Provider value={{ ...contextValues }}>
                <Home />
            </AppContext.Provider>
        )
    })
})