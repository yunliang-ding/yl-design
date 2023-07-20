import { useEffect, useRef } from 'react';
import Item from './item';
import Error from './error';
import mapping from './mapping';

const Form = ({
  form = Form.useForm(),
  initialValues = {},
  onValuesChange = (v, vs) => {},
  items = [],
}) => {
  const store = useRef(initialValues);
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
        return store.current;
      },
    });
  }, []);
  return (
    <div className="yld-form">
      {items.map((item) => {
        const itemProps = {
          ...item,
        };
        const Comp = mapping[item.type] || <Error type={item.type} />;
        delete itemProps.props;
        return (
          <Item {...itemProps}>
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
