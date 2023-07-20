import { useEffect, useRef, useState } from 'react';
import Item from './item';
import Error from './error';
import mapping from './mapping';

const Form = ({ form = Form.useForm(), items = [] }) => {
  const [store, setStore] = useState({});
  // 挂载 api
  useEffect(() => {
    Object.assign(form, {
      getValues: () => {
        return store;
      },
      setValues: (values) => {
        setStore({
          ...store,
          ...values,
        });
      },
      validateValues: () => {},
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
            <Comp {...item.props} />
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
