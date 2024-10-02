interface Props {
    name: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}
export default function SelectComponent({ name, value, options, onChange }: Props): JSX.Element;
export {};
