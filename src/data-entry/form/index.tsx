import { useEffect, useRef } from 'react';
import Schema from 'async-validator';
import Item from './item';
/**
 * 禁止使用 useState, 所有状态变通过 itemRef 发布通知
 */
const Form = ({
  form = Form.useForm(),
  initialValues = {},
  onValuesChange = (v, vs) => {},
  items = [],
  column = 1,
}) => {
  const store = useRef(initialValues);
  const descriptorRef: any = useRef({});
  const itemRef: any = useRef({});
  const errorItemRef: any = useRef([]); // 保存上一次检验失败的字段
  // 挂载 api
  useEffect(() => {
    Object.assign(form, {
      // 通知所有的Item全部禁用
      setDisabled: (v: boolean) => {
        Object.keys(itemRef.current).forEach((name) => {
          itemRef.current[name].setDisabled(v);
        });
      },
      mergeItemByName(name, item) {
        itemRef.current[name].setItem(item);
      },
      getValues: () => {
        return store.current;
      },
      setValues: (values: any) => {
        store.current = {
          ...store.current,
          ...values,
        };
      },
      validateField: (name: string, value: any) => {
        const validator = new Schema({
          [name]: descriptorRef.current[name],
        });
        validator.validate({ [name]: value }, (errors) => {
          if (errors) {
            errors.map((error) => {
              itemRef.current[error.field].showError(error.message);
            });
          } else {
            itemRef.current[name].clearError();
          }
        });
      },
      validateFields: async () => {
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
    <div className={`yld-form yld-form-grid-${column}`}>
      {items.map((item) => {
        itemRef.current[item.name] = {};
        return (
          <Item
            item={item}
            itemRef={itemRef.current[item.name]}
            descriptorRef={descriptorRef}
            value={store.current[item.name]}
            onChange={(e) => {
              const value = e?.eventPhase ? e.target.value : e;
              form.setValues({
                [item.name]: value,
              });
              // 校验自己
              if (descriptorRef.current[item.name]) {
                form.validateField(item.name, value);
              }
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