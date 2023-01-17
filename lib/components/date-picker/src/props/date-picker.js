'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var shared = require('./shared.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const { buddhistEra } = shared.buddhistEraSharedProps;
const datePickerProps = runtime.buildProps({
  type: {
    type: runtime.definePropType(String),
    default: "date"
  },
  buddhistEra
});

exports.datePickerProps = datePickerProps;
//# sourceMappingURL=date-picker.js.map
