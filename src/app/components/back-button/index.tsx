import { BackIcon } from "../icons/back-icon";
import { BackButtonContainer } from "./styles";

export function BackButton() {
    return (
        <BackButtonContainer>
            <BackIcon />
            <span>Voltar</span>
        </BackButtonContainer>
    )
}