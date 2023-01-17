import '../../../../utils/index.mjs';
import { datePickerSharedProps } from './shared.mjs';
import { buildProps } from '../../../../utils/vue/props/runtime.mjs';

const { date, disabledDate, parsedValue } = datePickerSharedProps;
const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
  buddhistEra: {
    type: Boolean,
    default: false
  }
});

export { basicYearTableProps };
//# sourceMappingURL=basic-year-table.mjs.map
