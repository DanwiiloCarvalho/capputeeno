import { render, screen } from "@testing-library/react"
import { Header } from "."
import { Providers } from "../providers"

describe('Header', () => {
    it('should display a text that says "Capputeeno"', async () => {
        render(
            <Providers>
                <Header />
            </Providers>
        )

        const title = await screen.findByText('capputeeno');
        expect(title).toBeInTheDocument();
    })
})