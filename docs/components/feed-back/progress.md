# Progress 进度条

```jsx
/**
 * title: 基本使用
 */
import React from 'react';
import { Progress } from 'yl-design';
export default () => {
  return (
    <>
      <Progress percent={30} />
      <br />
      <Progress percent={50} active />
      <br />
      <Progress percent={90} strokeColor={'#52c41a'} />
    </>
  );
};
```

```jsx
/**
 * title: 获取和设置进度
 */
import React from 'react';
import { Progress, Button } from 'yl-design';
export default () => {
  const progressRef = React.useRef({});
  return (
    <>
      <Progress percent={30} progressRef={progressRef} />
      <br />
      <Button
        onClick={() => {
          progressRef.current.setPercent(progressRef.current.percent + 10);
        }}
      >
        +
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={() => {
          progressRef.current.setPercent(progressRef.current.percent - 10);
        }}
      >
        -
      </Button>
    </>
  );
};
```
