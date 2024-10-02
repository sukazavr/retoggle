interface Props {
    name: string;
    value: boolean;
    onChange: (value: boolean) => void;
}
export default function ToggleComponent({ name, value, onChange }: Props): JSX.Element;
export {};
