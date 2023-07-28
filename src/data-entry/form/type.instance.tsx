export interface FormInstance {
  setDisabled?: Function;
  mergeItemByName?: Function;
  getValues?: Function;
  setValues?: Function;
  validateFields?: Function;
  validateField?: Function;
}

const Hello: React.FC<FormInstance> = () => null;

export default Hello;
