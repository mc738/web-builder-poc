import React from "react";
import {useNode} from "@craftjs/core";

interface ContainerComponentProps {
    background: string,
    padding: string,
    margin: string,
}

export const ContainerComponent = ({ background = "", padding = '0px', margin = "", children }: React.PropsWithChildren<ContainerComponentProps>) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <div ref={ref=> connect(drag(ref!))} className="w-full p-4 border-l" style={{margin: margin, background, padding}}>
            {children}
        </div>
    )
}