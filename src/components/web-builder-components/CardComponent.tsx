import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ContainerComponent} from "@/components/web-builder-components/ContainerComponent.tsx";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";
import {ButtonComponent} from "@/components/web-builder-components/ButtonComponent.tsx";
import {Element, useNode, Node} from "@craftjs/core";
import {PropsWithChildren} from "react";

interface CardComponentProps {
    background: string
    padding: string
}

export const CardBody = ({children}: PropsWithChildren) => {
    const {connectors: {connect}} = useNode();

    return (
        <div ref={ref => connect(ref!)} className="text-only">
            {children}
        </div>
    )
}

CardBody.craft = {
    rules: {
        canMoveIn: (incomingNodes: Node[]) => incomingNodes.every(incomingNode => incomingNode.data.type === TextComponent),
    }
}

export const CardBottom = ({children}: PropsWithChildren) => {
    const {connectors: {connect}} = useNode();

    return (
        <div ref={ref => connect(ref!)}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    rules: {
        canMoveIn: (incomingNodes: Node[]) => incomingNodes.every(incomingNode => incomingNode.data.type === ButtonComponent),
    }
}

export const CardComponent = ({background, padding}: CardComponentProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>card</CardDescription>

            </CardHeader>
            <CardContent>
                <ContainerComponent background={background} padding={padding} margin={'0'}>
                    <Element id="text" is={CardBody} canvas>
                        <TextComponent text="Title" fontSize="20" fontSizeUnits="px" />
                        <TextComponent text="Description" fontSize="16" fontSizeUnits="px" />
                    </Element>
                </ContainerComponent>
            </CardContent>
            <CardFooter>
                <Element id="buttons" is={CardBottom} canvas>
                    <ButtonComponent size="sm" variant="outline" color="primary">
                        Learn more
                    </ButtonComponent>
                </Element>
            </CardFooter>
        </Card>)
}