'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const datePickerProps = runtime.buildProps({
  type: {
    type: runtime.definePropType(String),
    default: "date"
  },
  buddhistEra: {
    type: Boolean,
    default: false
  }
});

exports.datePickerProps = datePickerProps;
//# sourceMappingURL=date-picker.js.map
