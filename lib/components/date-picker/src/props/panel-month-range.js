'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var shared = require('./shared.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const { buddhistEra } = shared.buddhistEraSharedProps;
const panelMonthRangeProps = runtime.buildProps({
  ...shared.panelRangeSharedProps,
  buddhistEra
});
const panelMonthRangeEmits = ["pick", "set-picker-option"];

exports.panelMonthRangeEmits = panelMonthRangeEmits;
exports.panelMonthRangeProps = panelMonthRangeProps;
//# sourceMappingURL=panel-month-range.js.map
