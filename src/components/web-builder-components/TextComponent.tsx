import {Node, useNode} from '@craftjs/core';
import ContentEditable from "react-contenteditable";
import {useEffect, useState} from "react";


interface TextComponentProps {
    text: string
    fontSize: string
}

export const TextComponent = ({text, fontSize}: TextComponentProps) => {
    const {connectors: {connect, drag}, hasSelectedNode, /*hasDraggedNode,*/ actions: {setProp}} = useNode((state) => ({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        !hasSelectedNode && setEditable(false);
    }, [hasSelectedNode]);

    return (
        <div
            ref={ref => connect(drag(ref!))}
            onClick={_ => setEditable(true)}>
            <ContentEditable
                html={text}
                onChange={e =>
                    setProp((props: { text: string }) =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))}
                tagName="p"
                style={{fontSize}}
                disabled={!editable}
            ></ContentEditable>
        </div>
    );
}

TextComponent.craft = {
    rules: {
        canDrag: (node: Node) => node.data.props.text !== "drag"
    }
}