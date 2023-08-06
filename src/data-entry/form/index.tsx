import { useRef, useEffect, useState } from 'react';
import Schema from 'async-validator';
import { FormProps, FormRefInstance } from './type.form';
import Item from './item';

const flexMapping = {
  1: {
    label: 2,
    wrap: 19,
  },
  2: {
    label: 2,
    wrap: 8.2,
  },
  3: {
    label: 4,
    wrap: 9,
  },
};

const Form = ({
  initialValues = {},
  onValuesChange = () => {},
  items = [],
  column = 1,
  className,
  horizontal = false,
  disabled = false,
  flex = horizontal
    ? flexMapping[column]
    : {
        label: 1,
        wrap: 1,
      },
  ...rest
}: FormProps) => {
  const form = rest.form || Form.useForm();
  const [done, setDone] = useState(false);
  const store = useRef(initialValues);
  const descriptorRef: any = useRef({});
  const itemRef: any = useRef({});
  const errorItemRef: any = useRef([]); // 保存上一次检验失败的字段
  // 通知 item 更新
  const itemUpdateOnStoreChange = () => {
    console.log(itemRef.current);
    Object.keys(itemRef.current).forEach((name) => {
      itemRef.current[name].setValue(store.current[name]);
    });
  };
  // 挂载 api
  useEffect(() => {
    Object.assign(form, {
      // 通知所有的Item全部禁用
      setDisabled: (v: boolean) => {
        Object.keys(itemRef.current).forEach((name) => {
          itemRef.current[name].setDisabled?.(v);
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
        itemUpdateOnStoreChange();
      },
      clearValues: () => {
        store.current = {};
        itemUpdateOnStoreChange();
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
    setDone(true);
  }, []);
  const _className = ['yld-form', `yld-form-grid-${column}`];
  if (className) {
    _className.push(className);
  }
  if (horizontal) {
    _className.push('yld-form-horizontal');
  }
  return done ? (
    <div className={_className.join(' ')}>
      {items.map((item) => {
        itemRef.current[item.name] = itemRef.current[item.name] || {}; // 保留之前的ref
        item.flex = item.flex || flex;
        return (
          <Item
            item={item}
            form={form}
            column={column}
            disabled={disabled}
            itemRef={itemRef.current[item.name]}
            descriptorRef={descriptorRef}
            value={store.current[item.name]}
            onChange={(e, option) => {
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
              if (typeof item.props?.onChange === 'function') {
                item.props.onChange(value, option);
              }
              // 提示该item拿最新的value去更新, 确保原子性，哪个 item 值改变，就更新 哪个 item
              itemRef.current[item.name].setValue?.(store.current[item.name]);
              /** 触发重新渲染 */
              if (Array.isArray(item.touchItemsRender)) {
                item.touchItemsRender.forEach(({ name, clear }) => {
                  itemRef.current[name].reload();
                  // 是否清空
                  if (clear) {
                    form.setValues({
                      [name]: undefined,
                    });
                  }
                });
              }
            }}
          />
        );
      })}
    </div>
  ) : null;
};

Form.useForm = () => {
  const ref: FormRefInstance = useRef({
    getValues: () => {},
    setValues: () => {},
    setDisabled: () => {},
    mergeItemByName: () => {},
    validateField: () => {},
    validateFields: () => {},
    clearValues: () => {},
  });
  return ref.current;
};

export default Form;
