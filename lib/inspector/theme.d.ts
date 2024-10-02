/// <reference types="react" />
import { ThemeKeys } from "react-json-view";
export interface Theme {
    primaryColor: string;
    backgroundColor: string;
    collapseHandle: {
        backgroundColor: string;
        color: string;
    };
    knob: {
        label: {
            color: string;
            dividerColor: string;
        };
        slider: {
            railColor: string;
            handleColor: string;
            activeTrackColor: string;
        };
    };
    log: {
        objectViewerTheme: ThemeKeys;
        label: {
            color: string;
            dividerColor: string;
        };
    };
}
export declare const DefaultTheme: Theme;
export declare const DarkTheme: Theme;
declare const ThemeContext: import("react").Context<Theme>;
export default ThemeContext;
