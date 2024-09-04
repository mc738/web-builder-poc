import {Button} from "@/components/ui/button.tsx";
import {Type} from "lucide-react";

export const LeftBar = () => {
    return(
        <aside className="hidden h-full w-14 flex-col border-r bg-background sm:flex items-center pt-4">
            <Button variant="ghost" size="icon">
                <Type></Type>
            </Button>
        </aside>
    )

}