interface Props {
    name: string;
    value: number;
    min: number;
    max: number;
    onChange: (value: number) => void;
}
export default function TimeMachine({ name, value, min, max, onChange }: Props): JSX.Element;
export {};
