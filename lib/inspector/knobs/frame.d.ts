import React, { ReactElement } from "react";
export interface Props {
    /**
     * React element for icon
     */
    icon: React.ReactElement<any>;
    /**
     * Label for the frame
     */
    label: string;
    /**
     * Sets the flex direction of the frame. Valid values are "column" or "row"
     */
    direction?: "column" | "row";
    /**
     * The content of the frame. Your knob's component.
     */
    children: ReactElement<any>;
    /**
     * Style override for the frame container div.
     */
    style?: any;
}
export declare const KnobFrame: React.FC<Props>;
