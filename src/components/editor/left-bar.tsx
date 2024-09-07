import {Button} from "@/components/ui/button.tsx";
import {RectangleHorizontal, Type} from "lucide-react";
import {useEditor} from "@craftjs/core";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";
import {ButtonComponent} from "@/components/web-builder-components/ButtonComponent.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";

export const LeftBar = () => {
    const {connectors/*, query*/} = useEditor();

    return (
        <aside className="hidden h-full w-14 flex-col border-r bg-background sm:flex items-center pt-4">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button ref={ref => connectors.create(ref!, <TextComponent text={"Hello, World!"} fontSize={"1rem"}/>)}
                                variant="ghost"
                                size="icon">
                            <Type/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Text block</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button ref={ref =>
                            connectors.create(ref!,
                                <ButtonComponent
                                    size="sm"
                                    variant="outline"
                                    color="">
                                    Click me!
                                </ButtonComponent>)}
                                variant="ghost"
                                size="sm">
                            <RectangleHorizontal></RectangleHorizontal>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Button</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </aside>
    )

}