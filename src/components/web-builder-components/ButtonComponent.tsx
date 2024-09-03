import React from "react";
import {Button} from "@/components/ui/button.tsx";

interface ButtonComponentProps {
    size: "default" | "sm" | "lg" | "icon" | null | undefined,
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    color: string,
}

export const ButtonComponent = ({size, variant, color, children}: React.PropsWithChildren<ButtonComponentProps>) => {
    return (
        <Button size={size} variant={variant} color={color}>
            {children}
        </Button>
    )

}