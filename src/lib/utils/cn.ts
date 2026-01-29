import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes intelligently, resolving conflicts
 * (e.g. "px-4 py-2 px-6" → only the last one wins)
 */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}