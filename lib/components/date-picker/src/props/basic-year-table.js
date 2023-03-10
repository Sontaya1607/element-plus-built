'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var shared = require('./shared.js');
var runtime = require('../../../../utils/vue/props/runtime.js');

const { date, disabledDate, parsedValue } = shared.datePickerSharedProps;
const { buddhistEra } = shared.buddhistEraSharedProps;
const basicYearTableProps = runtime.buildProps({
  date,
  disabledDate,
  parsedValue,
  buddhistEra
});

exports.basicYearTableProps = basicYearTableProps;
//# sourceMappingURL=basic-year-table.js.map
