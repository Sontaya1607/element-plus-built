import { computed } from 'vue';
import '../../../../hooks/index.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';

const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate,
  buddhistEra
}) => {
  const { t } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = computed(() => {
    const yearOffset = buddhistEra.value ? 543 : 0;
    return `${leftDate.value.year() + yearOffset} ${t("el.datepicker.year")}`;
  });
  const rightLabel = computed(() => {
    const yearOffset = buddhistEra.value ? 543 : 0;
    return `${rightDate.value.year() + yearOffset} ${t("el.datepicker.year")}`;
  });
  const leftYear = computed(() => {
    return leftDate.value.year();
  });
  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};

export { useMonthRangeHeader };
//# sourceMappingURL=use-month-range-header.mjs.map
