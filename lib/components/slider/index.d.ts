interface Props {
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
}
export default function CustomSlider({ min, max, value, onChange }: Props): JSX.Element;
export {};
