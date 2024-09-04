import {Node, useNode} from '@craftjs/core';


interface TextComponentProps {
    text: string
    fontSize: string
}

export const TextComponent = ({text, fontSize}: TextComponentProps) => {
    const {connectors: {connect, drag}} = useNode();

    return (
        <div ref={ref => connect(drag(ref!))}>
            <p style={{fontSize}}>{text}</p>
        </div>
    );
}

TextComponent.craft = {
    rules: {
        canDrag: (node: Node) => node.data.props.text !== "drag"
    }
}