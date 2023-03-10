'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../utils/index.js');
var transferPanel = require('../transfer-panel2.js');
var usePropsAlias = require('./use-props-alias.js');
var shared = require('@vue/shared');

const useCheck = (props, panelState, emit) => {
  const propsAlias = usePropsAlias.usePropsAlias(props);
  const filteredData = vue.computed(() => {
    return props.data.filter((item) => {
      if (shared.isFunction(props.filterMethod)) {
        return props.filterMethod(panelState.query, item);
      } else {
        const label = String(item[propsAlias.value.label] || item[propsAlias.value.key]);
        return label.toLowerCase().includes(panelState.query.toLowerCase());
      }
    });
  });
  const checkableData = vue.computed(() => filteredData.value.filter((item) => !item[propsAlias.value.disabled]));
  const checkedSummary = vue.computed(() => {
    const checkedLength = panelState.checked.length;
    const dataLength = props.data.length;
    const { noChecked, hasChecked } = props.format;
    if (noChecked && hasChecked) {
      return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength.toString()).replace(/\${total}/g, dataLength.toString()) : noChecked.replace(/\${total}/g, dataLength.toString());
    } else {
      return `${checkedLength}/${dataLength}`;
    }
  });
  const isIndeterminate = vue.computed(() => {
    const checkedLength = panelState.checked.length;
    return checkedLength > 0 && checkedLength < checkableData.value.length;
  });
  const updateAllChecked = () => {
    const checkableDataKeys = checkableData.value.map((item) => item[propsAlias.value.key]);
    panelState.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every((item) => panelState.checked.includes(item));
  };
  const handleAllCheckedChange = (value) => {
    panelState.checked = value ? checkableData.value.map((item) => item[propsAlias.value.key]) : [];
  };
  vue.watch(() => panelState.checked, (val, oldVal) => {
    updateAllChecked();
    if (panelState.checkChangeByUser) {
      const movedKeys = val.concat(oldVal).filter((v) => !val.includes(v) || !oldVal.includes(v));
      emit(transferPanel.CHECKED_CHANGE_EVENT, val, movedKeys);
    } else {
      emit(transferPanel.CHECKED_CHANGE_EVENT, val);
      panelState.checkChangeByUser = true;
    }
  });
  vue.watch(checkableData, () => {
    updateAllChecked();
  });
  vue.watch(() => props.data, () => {
    const checked = [];
    const filteredDataKeys = filteredData.value.map((item) => item[propsAlias.value.key]);
    panelState.checked.forEach((item) => {
      if (filteredDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    panelState.checkChangeByUser = false;
    panelState.checked = checked;
  });
  vue.watch(() => props.defaultChecked, (val, oldVal) => {
    if (oldVal && val.length === oldVal.length && val.every((item) => oldVal.includes(item)))
      return;
    const checked = [];
    const checkableDataKeys = checkableData.value.map((item) => item[propsAlias.value.key]);
    val.forEach((item) => {
      if (checkableDataKeys.includes(item)) {
        checked.push(item);
      }
    });
    panelState.checkChangeByUser = false;
    panelState.checked = checked;
  }, {
    immediate: true
  });
  return {
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    updateAllChecked,
    handleAllCheckedChange
  };
};

exports.useCheck = useCheck;
//# sourceMappingURL=use-check.js.map
