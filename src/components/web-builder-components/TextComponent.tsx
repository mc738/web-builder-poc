import {Node, useNode} from '@craftjs/core';
import ContentEditable from "react-contenteditable";
import {useEffect, useState} from "react";


interface TextComponentProps {
    text: string
    fontSize: string
}

export const TextComponent = ({text, fontSize}: TextComponentProps) => {
    const {connectors: {connect, drag}, isActive, actions: {setProp}} = useNode((state) => ({
        isActive: state.events.selected
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !isActive && setEditable(false);
    }, [isActive]);

    return (
        <div
            ref={ref => connect(drag(ref!))}
            onClick={() => setEditable(true)}>
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

