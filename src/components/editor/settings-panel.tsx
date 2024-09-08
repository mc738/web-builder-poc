import {Badge} from "@/components/ui/badge.tsx";
import {useEditor} from "@craftjs/core";
import React from "react";

export const SettingsPanel = () => {

    const {selected} = useEditor((state) => {
        const [currentNodeId] = state.events.selected;
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
            };
        }

        return {selected}
    });

    return selected ? (
        <div>
            <div className="grid grid-cols-1">
                <div className="items-center">
                    <h1>Selected</h1>
                    <Badge></Badge>
                    {selected.settings && React.createElement(selected.settings)}
                </div>
            </div>
        </div>
    ) : null
};