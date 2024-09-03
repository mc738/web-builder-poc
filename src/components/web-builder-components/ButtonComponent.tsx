import {Button} from "@/components/ui/button.tsx";

interface  ButtonComponentProps {
    size: string,
    variant: string,
    color: string,
}

export const ButtonComponent = ({size, variant, color, children}) => {
    return (
        <Button>
            {children}

            </Button>
    )

}