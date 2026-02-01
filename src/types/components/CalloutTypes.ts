import { ReactNode } from "react";

type CalloutType = 'success' | 'info' | 'warning' | 'error' | 'note';

export interface CalloutProps {
    type?: CalloutType;
    title?: string;
    children?: ReactNode;
    className?: string;
}