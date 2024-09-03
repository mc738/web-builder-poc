
export const TextComponent = ({text, fontSize}: {text: string; fontSize: string}) => {
    return (
        <div>
            <p style={{fontSize}}>{text}</p>
        </div>
    );
}