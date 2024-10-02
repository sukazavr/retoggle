/// <reference types="react" />
export default function useSelectKnob(name: string, options: string[], initialValue: string): readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>];
