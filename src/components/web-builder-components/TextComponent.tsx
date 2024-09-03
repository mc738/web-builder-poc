
interface TextComponentProps {
    text: string
    fontSize: string
}

export const TextComponent = ({text, fontSize}: TextComponentProps) => {
    return (
        <div>
            <p style={{fontSize}}>{text}</p>
        </div>
    );
}