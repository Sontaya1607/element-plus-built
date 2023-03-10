import type { ExtractPropTypes } from 'vue';
export declare const panelMonthRangeProps: {
    readonly buddhistEra: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly unlinkPanels: BooleanConstructor;
    readonly parsedValue: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare const panelMonthRangeEmits: string[];
export declare type PanelMonthRangeProps = ExtractPropTypes<typeof panelMonthRangeProps>;
