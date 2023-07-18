# Carousel 走马灯

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Carousel, Icon } from 'yl-design';
export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const pages = [
    <div style={style}>
      <Icon type="password-visible" size={50} />
      page1
    </div>,
    <div style={style}>
      <Icon type="weimingmingwenjianjia_rili" size={50} />
      page2
    </div>,
    <div style={style}>
      <Icon type="empty" size={50} />
      page3
    </div>,
    <div style={style}>
      <Icon type="password-invisible" size={50} />
      page4
    </div>,
  ];
  return (
    <div style={{ display: 'flex' }}>
      <Carousel style={{ width: 500, height: 240 }} pages={pages} />
      <Carousel
        showArrow
        style={{ width: 500, height: 240, marginLeft: 100 }}
        pages={pages}
      />
    </div>
  );
};
```

```jsx
/**
 * title: 自动播放/渐变模式
 */
import React from 'react';
import { Carousel, Icon } from 'yl-design';
export default () => {
  const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const pages = [
    <div style={style}>
      <Icon type="password-visible" size={50} />
      page1
    </div>,
    <div style={style}>
      <Icon type="weimingmingwenjianjia_rili" size={50} />
      page2
    </div>,
    <div style={style}>
      <Icon type="empty" size={50} />
      page3
    </div>,
    <div style={style}>
      <Icon type="password-invisible" size={50} />
      page4
    </div>,
  ];
  return (
    <Carousel
      showArrow
      autoPlay
      effect="fade"
      style={{ width: 500, height: 240 }}
      pages={pages}
    />
  );
};
```
