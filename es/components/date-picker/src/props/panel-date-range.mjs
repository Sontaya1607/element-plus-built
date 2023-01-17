import '../../../../utils/index.mjs';
import { buddhistEraSharedProps, panelSharedProps, panelRangeSharedProps } from './shared.mjs';
import { buildProps } from '../../../../utils/vue/props/runtime.mjs';

const { buddhistEra } = buddhistEraSharedProps;
const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
  buddhistEra
});

export { panelDateRangeProps };
//# sourceMappingURL=panel-date-range.mjs.map
