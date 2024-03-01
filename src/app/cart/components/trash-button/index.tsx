import { TrashIcon } from "@/app/components/icons/trash-icon";
import { TrashButtonContainer } from "./styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface TrashButtonProps {
    cartItemId: string
}

export function TrashButton({ cartItemId }: TrashButtonProps) {

    const { deleteCartProduct } = useLocalStorage()

    function handleTrashButton() {
        deleteCartProduct(cartItemId)
    }

    return (
        <TrashButtonContainer onClick={handleTrashButton}>
            <TrashIcon />
        </TrashButtonContainer>
    )
}