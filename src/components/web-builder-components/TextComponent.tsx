import {Node, useNode} from '@craftjs/core';
import ContentEditable from "react-contenteditable";


interface TextComponentProps {
    text: string
    fontSize: string
}

export const TextComponent = ({text, fontSize}: TextComponentProps) => {
    const {connectors: {connect, drag}, actions: {setProp}} = useNode();

    return (
        <div ref={ref => connect(drag(ref!))}>
            <ContentEditable
                html={text}
                onChange={e =>
                    setProp((props: { text: string }) =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))}
                tagName="p"
                style={{fontSize}}
            ></ContentEditable>
        </div>
    );
}

TextComponent.craft = {
    rules: {
        canDrag: (node: Node) => node.data.props.text !== "drag"
    }
}