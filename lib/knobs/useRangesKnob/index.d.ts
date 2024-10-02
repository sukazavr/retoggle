import { Props } from "../useRangeKnob/range";
export default function useRangesKnob(name: string, ranges: {
    [name: string]: Props;
}): {
    values: {};
}[];
