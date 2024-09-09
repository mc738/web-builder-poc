import {Node, useNode} from '@craftjs/core';
import ContentEditable from "react-contenteditable";
import {useEffect, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";


interface TextComponentProps {
    text: string
    fontSize: string
    fontSizeUnits: string
}

export const TextComponent = ({text, fontSize, fontSizeUnits}: TextComponentProps) => {
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
                style={{fontSize: `${fontSize}${fontSizeUnits}`}}
                disabled={!editable}
            ></ContentEditable>
        </div>
    );
}


const TextSettings = () => {
    const {actions: {setProp}, fontSize, fontSizeUnits} = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        fontSizeUnits: node.data.props.fontSizeUnits
    }));

    return (
        <>
            <Label>Font size</Label>
            <div className="flex flex-row">
                <div className="w-3/4">
                    <Input
                        type="number"
                        value={fontSize}
                        onChange={e => {
                            setProp((props: TextComponentProps) => props.fontSize = e.target.value);
                        }}></Input>
                </div>
                <div className="w-1/4">
                    <Select
                        value={fontSizeUnits}
                        onValueChange={e => {
                            setProp((props: TextComponentProps) => props.fontSizeUnits = e);
                        }}>
                        <SelectTrigger>
                            <SelectValue placeholder="Units"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="px">px</SelectItem>
                            <SelectItem value="em">em</SelectItem>
                            <SelectItem value="rem">rem</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    )

}

TextComponent.craft = {
    props: {
        text: "Hello, World!",
        fontSize: "1",
        fontSizeUnits: "rem"
    },
    rules: {
        canDrag: (node: Node) => node.data.props.text !== "drag"
    },
    related: {
        settings: TextSettings
    }
}
