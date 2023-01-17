import '../../../../utils/index.mjs';
import { buddhistEraSharedProps, panelRangeSharedProps } from './shared.mjs';
import { buildProps } from '../../../../utils/vue/props/runtime.mjs';

const { buddhistEra } = buddhistEraSharedProps;
const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps,
  buddhistEra
});
const panelMonthRangeEmits = ["pick", "set-picker-option"];

export { panelMonthRangeEmits, panelMonthRangeProps };
//# sourceMappingURL=panel-month-range.mjs.map
