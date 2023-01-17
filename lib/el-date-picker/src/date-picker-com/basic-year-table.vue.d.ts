import type { PropType } from 'vue';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs>;
    };
    date: {
        type: PropType<dayjs.Dayjs>;
    };
    buddhistEra: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    startYear: import("vue").ComputedRef<number>;
    getCellStyle: (year: any) => any;
    handleYearTableClick: (event: any) => void;
    yearOffset: number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pick"[], "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    buddhistEra: boolean;
} & {
    disabledDate?: (_: Date) => void;
    parsedValue?: dayjs.Dayjs;
    date?: dayjs.Dayjs;
}>, {
    buddhistEra: boolean;
}>;
export default _default;
