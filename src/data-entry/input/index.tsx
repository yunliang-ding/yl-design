import { AddonBefore, AddonAfter, TextArea, Input } from './components';

const InputWrapper = (props: any) => {
  return (
    <span
      style={props.style}
      className={props.type === 'textarea' ? 'yld-textarea-wrapper' : 'yld-input-wrapper'}
    >
      <AddonBefore addon={props.addonBefore} />
      {props.type === 'textarea' ? <TextArea {...props} /> : <Input {...props} />}
      <AddonAfter addon={props.addonAfter} />
    </span>
  );
};
InputWrapper.nickName = 'Input';
export default InputWrapper;
