import '../../../../utils/index.mjs';
import { buddhistEraSharedProps, panelSharedProps } from './shared.mjs';
import { buildProps, definePropType } from '../../../../utils/vue/props/runtime.mjs';

const { buddhistEra } = buddhistEraSharedProps;
const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  },
  buddhistEra
});

export { panelDatePickProps };
//# sourceMappingURL=panel-date-pick.mjs.map
