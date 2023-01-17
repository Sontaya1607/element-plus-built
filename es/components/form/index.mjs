import '../../utils/index.mjs';
import Form from './src/form.mjs';
import FormItem from './src/form-item2.mjs';
export { formEmits, formProps } from './src/form2.mjs';
export { formItemProps, formItemValidateStates } from './src/form-item.mjs';
import './src/types.mjs';
import { withInstall, withNoopInstall } from '../../utils/vue/install.mjs';

const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);

export { ElForm, ElFormItem, ElForm as default };
//# sourceMappingURL=index.mjs.map
