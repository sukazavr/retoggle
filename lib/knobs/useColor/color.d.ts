interface Props {
    name: string;
    value: any;
    onChange: (color: any) => void;
}
export default function Color({ name, value, onChange }: Props): JSX.Element;
export {};
