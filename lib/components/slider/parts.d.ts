import React from "react";
import { SliderItem, GetHandleProps, GetTrackProps } from "react-compound-slider";
interface IHandleProps {
    domain: number[];
    handle: SliderItem;
    getHandleProps: GetHandleProps;
    backgroundColor: string;
}
export declare const Handle: React.SFC<IHandleProps>;
interface ITrackProps {
    source: SliderItem;
    target: SliderItem;
    getTrackProps: GetTrackProps;
    backgroundColor: string;
}
export declare const Track: React.SFC<ITrackProps>;
export {};
