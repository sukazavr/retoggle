/// <reference types="react" />
export default function useRangeKnob(name: string, { initialValue, min, max }: {
    initialValue?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
}): readonly [number, import("react").Dispatch<import("react").SetStateAction<number>>];
