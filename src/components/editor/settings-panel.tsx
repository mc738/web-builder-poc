import {Badge} from "@/components/ui/badge.tsx";

export const SettingsPanel = () => {
    return(
        <div>
            <div className="grid grid-cols-1">
                <div className="items-center">
                    <h1>Selected</h1>
                    <Badge></Badge>
                </div>
            </div>
        </div>
    );
};