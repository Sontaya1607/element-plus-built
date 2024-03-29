export declare const isInContainer: (el?: Element | undefined, container?: Element | Window | undefined) => boolean;
export declare const getOffsetTop: (el: HTMLElement) => number;
export declare const getOffsetTopDistance: (el: HTMLElement, containerEl: HTMLElement) => number;
export declare const getClientXY: (event: MouseEvent | TouchEvent) => {
    clientX: number;
    clientY: number;
};
