import { useEffect, useRef } from 'react';
import Item from './item';
import Schema from 'async-validator';

const Form = ({
  form = Form.useForm(),
  initialValues = {},
  onValuesChange = (v, vs) => {},
  items = [],
}) => {
  const store = useRef(initialValues);
  const descriptorRef: any = useRef({});
  const itemRef: any = useRef({});
  const errorItemRef: any = useRef([]); // 保存上一次检验失败的字段
  // 挂载 api
  useEffect(() => {
    Object.assign(form, {
      getValues: () => {
        return store.current;
      },
      setValues: (values) => {
        store.current = {
          ...store.current,
          ...values,
        };
      },
      validateValues: async () => {
        const validator = new Schema(descriptorRef.current);
        const values = form.getValues();
        return new Promise((res, rej) => {
          validator.validate(values, (errors) => {
            if (errors) {
              errors.map((error) => {
                itemRef.current[error.field].showError(error.message);
              });
              // 找到在errorItemRef里面却不在errors里的需要清除下
              const needClear = errorItemRef.current.filter(
                (i) => !errors.some((error) => error.field === i.field),
              );
              needClear.map((error) => {
                itemRef.current[error.field].clearError();
              });
              errorItemRef.current = errors; // 更新
              rej(errors);
            } else {
              errorItemRef.current.map((error) => {
                itemRef.current[error.field].clearError();
              });
              errorItemRef.current = []; // 清空
              res(values);
            }
          });
        });
      },
    });
  }, []);
  return (
    <div className="yld-form">
      {items.map((item) => {
        itemRef.current[item.name] = {};
        return (
          <Item
            {...item}
            itemRef={itemRef.current[item.name]}
            descriptorRef={descriptorRef}
            value={store.current[item.name]}
            onChange={(value) => {
              form.setValues({
                [item.name]: value?.eventPhase ? value.target.value : value,
              });
              form.validateValues(); // 校验规则
              onValuesChange(
                {
                  [item.name]: store.current[item.name],
                },
                form.getValues(),
              );
              // 提示该item拿最新的value去更新, 确保原子性，哪个 item 值改变，就更新 哪个 item
              itemRef.current[item.name].setValue(store.current[item.name]);
            }}
          />
        );
      })}
    </div>
  );
};

Form.useForm = () => {
  const ref = useRef({});
  return ref.current;
};

export default Form;
