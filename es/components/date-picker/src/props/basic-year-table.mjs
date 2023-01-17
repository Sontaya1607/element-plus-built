import '../../../../utils/index.mjs';
import { datePickerSharedProps, buddhistEraSharedProps } from './shared.mjs';
import { buildProps } from '../../../../utils/vue/props/runtime.mjs';

const { date, disabledDate, parsedValue } = datePickerSharedProps;
const { buddhistEra } = buddhistEraSharedProps;
const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
  buddhistEra
});

export { basicYearTableProps };
//# sourceMappingURL=basic-year-table.mjs.map
