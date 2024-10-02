interface Props {
    name: string;
    value: object;
    onChange: (value: any) => void;
}
export default function ObjectComponent({ name, value, onChange }: Props): JSX.Element;
export {};
