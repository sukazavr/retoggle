interface Props {
    name: string;
    value: string;
    onChange: (value: string) => void;
}
export default function TextComponent({ name, value, onChange }: Props): JSX.Element;
export {};
