import React from "react";

interface ContainerComponentProps {
    background: string,
    padding: string,
    margin: string,
}

export const ContainerComponent = ({ background, padding = '0px', margin, children }: React.PropsWithChildren<ContainerComponentProps>) => {
    return (
        <div style={{margin: margin, background, padding}}>
            {children}
        </div>
    )
}