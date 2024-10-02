import React from "react";
import { Theme } from "./theme";
export interface Props {
    /**
     * Renders the inspector panel in a portal with fixed position
     * @default true
     */
    usePortal?: boolean;
    /**
     * Width of the inspector panel
     * @default 300px
     */
    width?: string;
    /**
     * Height of the inspector panel
     * @default auto
     */
    height?: string;
    /**
     * Theme of the inspector
     * @default DefaultTheme
     */
    theme?: Theme;
}
export declare const Inspector: React.FC<Props>;
