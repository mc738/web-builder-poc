import {Card} from "@/components/ui/card.tsx";
import {ContainerComponent} from "@/components/web-builder-components/ContainerComponent.tsx";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";
import {ButtonComponent} from "@/components/web-builder-components/ButtonComponent.tsx";

interface CardComponentProps {
    background: string
    padding: string
}

export const CardComponent = ({background, padding}: CardComponentProps) => {
    return (
        <Card>
            <ContainerComponent background={background} padding={padding} margin={'0'}>
                <div className='text-only'>
                    <TextComponent text="Title" fontSize="20px" />
                    <TextComponent text="Description" fontSize="16px" />
                </div>
                <div className='buttons-only'>
                    <ButtonComponent size="sm" variant="outline" color="primary">
                        Learn more
                    </ButtonComponent>
                </div>
            </ContainerComponent>
        </Card>)
}