import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {useNode} from "@craftjs/core";

interface ButtonComponentProps {
    size: "default" | "sm" | "lg" | "icon" | null | undefined,
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    color: string,
}

export const ButtonComponent = ({size, variant, color, children}: React.PropsWithChildren<ButtonComponentProps>) => {
    const {connectors: {connect, drag}} = useNode();
    return (
        <Button ref={ref => connect(drag(ref!))} size={size} variant={variant} color={color}>
            {children}
        </Button>
    )
}