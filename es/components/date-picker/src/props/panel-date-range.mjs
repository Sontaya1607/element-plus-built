import '../../../../utils/index.mjs';
import { panelSharedProps, panelRangeSharedProps } from './shared.mjs';
import { buildProps } from '../../../../utils/vue/props/runtime.mjs';

const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  buddhistEra: {
    type: Boolean,
    default: false
  }
});

export { panelDateRangeProps };
//# sourceMappingURL=panel-date-range.mjs.map