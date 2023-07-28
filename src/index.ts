import './index.less';
/** common */
export { default as Layer } from './common/layer';
/** general */
export { default as Icon } from './general/icon';
export { default as Button } from './general/button';
/** data-display */
export { default as Carousel } from './data-display/carousel';
export { default as Empty } from './data-display/empty';
export { default as Tooltip } from './data-display/tooltip';
export { default as Badge } from './data-display/badge';
export { default as Tabs } from './data-display/tabs';
export { default as Tree } from './data-display/tree';
export { default as Table } from './data-display/table';
export { default as Timeline } from './data-display/timeline';
export { default as Space } from './data-display/space';
/** data-entry */
export { default as Input } from './data-entry/input';
export { default as InputNumber } from './data-entry/input-number';
export { default as Checkbox } from './data-entry/checkbox';
export { default as CheckGroup } from './data-entry/checkbox/group';
export { default as Radio } from './data-entry/radio';
export { default as RadioGroup } from './data-entry/radio/group';
export { default as Select } from './data-entry/select';
export { default as Switch } from './data-entry/switch';
export { default as AutoComplete } from './data-entry/auto-complete';
export { default as DatePicker } from './data-entry/date-picker';
export { default as TimePicker } from './data-entry/time-picker';
export { default as Cascader } from './data-entry/cascader';
export { default as Slider } from './data-entry/slider';
export { default as Form } from './data-entry/form';
/** navigation */
export { default as Pagination } from './navigation/pagination';
export { default as Dropdown } from './navigation/dropdown';
export { default as Menu } from './navigation/menu';
/** layout */
export { default as Layout } from './layout/layout';
/** feed-back */
export { default as Drawer } from './feed-back/drawer';
export { default as Modal } from './feed-back/modal';
export { default as Spin } from './feed-back/spin';
export { default as Alert } from './feed-back/alert';
export { default as Progress } from './feed-back/progress';
export { default as Message } from './feed-back/message';
import Message from './feed-back/message';
export const message = new Message({
  duration: 3,
});
/** other */
export { default as CopyToClipboard } from './other/copy-to-clipboard';
