export interface FormInstance {
  /** 禁用表单 */
  setDisabled?: Function;
  /** 动态修改摸一个数据模型 */
  mergeItemByName?: Function;
  /** 获取表单值 */
  getValues?: Function;
  /** 设置表单值 */
  setValues?: Function;
  /** 表单校验 */
  validateFields?: Function;
  validateField?: Function;
}

const Hello: React.FC<FormInstance> = () => null;

export default Hello;
