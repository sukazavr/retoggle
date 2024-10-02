/// <reference types="react" />
export default function useTextKnob(name: string, initialValue?: string): readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>];
