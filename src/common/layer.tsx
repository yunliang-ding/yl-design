/**
 * 标准弹窗组件
 * layer
 * Select
 * Modal
 * Message
 * AutoComplete
 * DatePicker
 * TimePicker
 * Drawer
 * Tooltip
 */
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export interface LayerProps {}

export default ({
  children,
  open = false,
  close,
  style,
  refresh,
  childrenClassName,
  mask,
}: LayerProps | any) => {
  const className = ['yld-layer'];
  if (!open) {
    className.push('yld-layer-hidden');
  }
  if (childrenClassName) {
    className.push(childrenClassName);
  }
  const [layerContainer, setlayerContainer]: any = useState();
  /**
   * 下拉的dom
   */
  useEffect(() => {
    const layerContainer: any = document.createElement('div');
    layerContainer.style.left = 0;
    layerContainer.style.top = 0;
    layerContainer.style.width = '100%';
    layerContainer.style.position = 'absolute';
    setlayerContainer(layerContainer);
  }, []);
  const Renderlayer = () => {
    return (
      <>
        <div
          className="yld-layer-mask"
          onClick={close}
          style={{ background: mask ? '#00000014' : 'transparent' }}
        />
        <div className={className.join(' ')} style={style}>
          {children}
        </div>
      </>
    );
  };
  useEffect(() => {
    if (open) {
      /** 创建dom */
      document.querySelector('body')?.appendChild(layerContainer);
      ReactDOM.render(<Renderlayer />, layerContainer);
    } else {
      /** 删除dom */
      layerContainer && layerContainer.remove();
    }
  }, [open]);
  useEffect(() => {
    /** 更新 */
    if (open) {
      ReactDOM.render(<Renderlayer />, layerContainer);
    }
  }, [refresh]);
  return null;
};
