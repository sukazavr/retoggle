/// <reference types="react" />
export default function useBooleanKnob(name: string, initialValue?: boolean): readonly [boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>];
