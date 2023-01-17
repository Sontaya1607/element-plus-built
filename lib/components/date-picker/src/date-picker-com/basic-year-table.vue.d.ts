import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    date: {
        readonly type: import("vue").PropType<dayjs.Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledDate: {
        readonly type: import("vue").PropType<(date: Date) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parsedValue: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]) | ((new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    buddhistEra: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}, {
    datesInYear: (year: number, lang: string) => Date[];
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        date: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        disabledDate: {
            readonly type: import("vue").PropType<(date: Date) => boolean>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        parsedValue: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]) | ((new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        buddhistEra: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    }>> & {
        onPick?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "pick", ...args: any[]) => void;
    ns: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    t: import("element-plus/es/hooks").Translator;
    lang: import("vue").Ref<string>;
    tbodyRef: import("vue").Ref<HTMLElement | undefined>;
    currentCellRef: import("vue").Ref<HTMLElement | undefined>;
    yearOffset: number;
    startYear: import("vue").ComputedRef<number>;
    focus: () => void;
    getCellKls: (year: number) => Record<string, boolean>;
    isSelectedCell: (year: number) => boolean;
    handleYearTableClick: (event: MouseEvent | KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pick"[], "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    date: {
        readonly type: import("vue").PropType<dayjs.Dayjs>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    disabledDate: {
        readonly type: import("vue").PropType<(date: Date) => boolean>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    parsedValue: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]) | ((new (...args: any[]) => dayjs.Dayjs | dayjs.Dayjs[]) | (() => dayjs.Dayjs | dayjs.Dayjs[]))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    buddhistEra: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
}, {
    buddhistEra: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
