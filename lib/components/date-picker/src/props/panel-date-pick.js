'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var shared = require('./shared.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const { buddhistEra } = shared.buddhistEraSharedProps;
const panelDatePickProps = runtime.buildProps({
  ...shared.panelSharedProps,
  parsedValue: {
    type: runtime.definePropType([Object, Array])
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

exports.panelDatePickProps = panelDatePickProps;
//# sourceMappingURL=panel-date-pick.js.map
