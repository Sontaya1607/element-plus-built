import type { Ref, ToRef } from 'vue';
import type { Dayjs } from 'dayjs';
export declare const useMonthRangeHeader: ({ unlinkPanels, leftDate, rightDate, buddhistEra, }: {
    unlinkPanels: ToRef<boolean>;
    leftDate: Ref<Dayjs>;
    rightDate: Ref<Dayjs>;
    buddhistEra: ToRef<boolean>;
}) => {
    leftPrevYear: () => void;
    rightNextYear: () => void;
    leftNextYear: () => void;
    rightPrevYear: () => void;
    leftLabel: import("vue").ComputedRef<string>;
    rightLabel: import("vue").ComputedRef<string>;
    leftYear: import("vue").ComputedRef<number>;
    rightYear: import("vue").ComputedRef<number>;
};
