import { useEffect, useRef } from 'react';
import Item from './item';
import Error from './error';
import mapping from './mapping';
import Schema from 'async-validator';
import { isEmpty } from '@/tools';

const Form = ({
  form = Form.useForm(),
  initialValues = {},
  onValuesChange = (v, vs) => {},
  items = [],
}) => {
  const store = useRef(initialValues);
  const descriptorRef: any = useRef({});
  const itemRef: any = useRef({});
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
              rej(errors);
            } else {
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
        const itemProps = {
          ...item,
        };
        const Comp = mapping[item.type] || <Error type={item.type} />;
        delete itemProps.props;
        // 生成校验规则
        if (item.required) {
          descriptorRef.current[item.name] = {
            type: 'string',
            required: true,
            validator: (rule, value) => !isEmpty(value),
          };
        }
        return (
          <Item {...itemProps} itemRef={itemRef[item.name]}>
            <Comp
              {...item.props}
              /** 注入属性 */
              value={store.current[item.name]}
              onChange={(value) => {
                form.setValues({
                  [item.name]: value.eventPhase ? value.target.value : value,
                });
                onValuesChange(
                  {
                    [item.name]: store.current[item.name],
                  },
                  form.getValues(),
                );
              }}
            />
          </Item>
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
