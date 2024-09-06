import {Button} from "@/components/ui/button.tsx";
import {Type} from "lucide-react";
import {useEditor} from "@craftjs/core";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";

export const LeftBar = () => {
    const {connectors/*, query*/} = useEditor();

    return (
        <aside className="hidden h-full w-14 flex-col border-r bg-background sm:flex items-center pt-4">
            <Button ref={ref => connectors.create(ref!, <TextComponent text={"Hello, World!"} fontSize={"1rem"}/>)}
                    variant="ghost"
                    size="icon">
                <Type/>
            </Button>
        </aside>
    )

}