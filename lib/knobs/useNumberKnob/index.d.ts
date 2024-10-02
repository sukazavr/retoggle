/// <reference types="react" />
export default function useTextKnob(name: string, initialValue?: number): readonly [number, import("react").Dispatch<import("react").SetStateAction<number>>];
