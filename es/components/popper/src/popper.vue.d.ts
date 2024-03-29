import type { Instance as PopperInstance } from '@popperjs/core';
import type { ElPopperInjectionContext } from 'element-plus/es/tokens';
declare const _default: import("vue").DefineComponent<{
    readonly role: import("../../../utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "group" | "listbox" | "tooltip" | "navigation", unknown, "tooltip", boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly role: import("../../../utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "group" | "listbox" | "tooltip" | "navigation", unknown, "tooltip", boolean>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    triggerRef: import("vue").Ref<HTMLElement | undefined>;
    popperInstanceRef: import("vue").Ref<PopperInstance | undefined>;
    contentRef: import("vue").Ref<HTMLElement | undefined>;
    referenceRef: import("vue").Ref<HTMLElement | undefined>;
    role: import("vue").ComputedRef<import("../../../utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "group" | "listbox" | "tooltip" | "navigation", unknown>>;
    popperProvides: ElPopperInjectionContext;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly role: import("../../../utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "group" | "listbox" | "tooltip" | "navigation", unknown, "tooltip", boolean>;
}>>, {
    readonly role: import("../../../utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "group" | "listbox" | "tooltip" | "navigation", unknown>;
}>;
export default _default;
