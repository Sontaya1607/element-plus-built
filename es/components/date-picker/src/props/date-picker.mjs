import '../../../../utils/index.mjs';
import { buddhistEraSharedProps } from './shared.mjs';
import { buildProps, definePropType } from '../../../../utils/vue/props/runtime.mjs';

const { buddhistEra } = buddhistEraSharedProps;
const datePickerProps = buildProps({
  type: {
    type: definePropType(String),
    default: "date"
  },
  buddhistEra
});

export { datePickerProps };
//# sourceMappingURL=date-picker.mjs.map
