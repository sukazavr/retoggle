interface Props {
    name: string;
    value: number;
    onChange: (value: number) => void;
}
export default function TextComponent({ name, value, onChange }: Props): JSX.Element;
export {};
