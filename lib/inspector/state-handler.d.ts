export default class StateHandler {
    logs: any;
    knobs: any;
    knobRenderers: any;
    logSubscriber: (log: any) => void;
    knobSubscriber: (knob: any) => void;
    addLogSubscriber: (subscriber: any) => void;
    addKnobSubscriber: (subscriber: any) => void;
    haveLogs: () => boolean;
    haveKnobs: () => boolean;
    getLogs: () => any;
    getKnobs: () => any;
    setLog: (log: any) => void;
    removeLog: (name: string) => void;
    setKnob: (knob: any) => void;
    removeKnob: (name: string) => void;
    addKnobRenderer: (name: string, component: any) => void;
    getKnobRenderer: (name: string) => any;
}
export declare const defaultStateHandler: StateHandler;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const addLogSubscriber: (subscriber: any) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const addKnobSubscriber: (subscriber: any) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const haveLogs: () => boolean;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const haveKnobs: () => boolean;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const getLogs: () => any;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const getKnobs: () => any;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const setLog: (log: any) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const removeLog: (name: string) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const setKnob: (knob: any) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const removeKnob: (name: string) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const addKnobRenderer: (name: string, component: any) => void;
/** @deprecated use inspector context. using these methods will only affect inspectors not used in an inspector context */
export declare const getKnobRenderer: (name: string) => any;
