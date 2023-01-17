'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var shared = require('./shared.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const { buddhistEra } = shared.buddhistEraSharedProps;
const panelDateRangeProps = runtime.buildProps({
  ...shared.panelSharedProps,
  ...shared.panelRangeSharedProps,
  buddhistEra
});

exports.panelDateRangeProps = panelDateRangeProps;
//# sourceMappingURL=panel-date-range.js.map
