import React from 'react';
import StateHandler from './state-handler';
export declare const InspectorContext: React.Context<StateHandler>;
declare type Props = {
    children?: any;
    value?: StateHandler;
};
export default function InspectorProvider({ children, value }: Props): JSX.Element;
export {};
