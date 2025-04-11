import { render } from "@testing-library/react"
import { FilterBar } from ".";

describe('FilterBar', () => {
    it('should render the FilterBar component', async () => {
        render(
            <FilterBar />
        );
    })
})