import ReactDOM from 'react-dom';
import { Icon } from '../../index';

const $: any = document.querySelector.bind(document);
const $$: any = document.querySelectorAll.bind(document);
const typeMapping = {
  1: 'message_SendSuccessfully',
  2: 'cuo',
  3: 'info_warning',
  4: 'warning',
};
const colorMapping = {
  1: '#1ac7aa',
  2: '#d81e06',
  3: '#f4ea2a',
  4: '#39a9f4',
};
interface MessageProps {
  /** 提示的秒数 */
  duration?: number;
  /** 提示的位置 */
  position?: 'center' | 'bottomRight';
  /** 主题 */
  theme?: 'light' | 'dark';
}

export default ({
  duration = 3,
  position = 'center',
  theme = 'light',
}: MessageProps) => {
  const open = (type, content) => {
    let messageContainer = document.createElement('div');
    let length = $$('.yld-message').length;
    messageContainer.className = 'yld-message';
    if (theme === 'dark') {
      messageContainer.className = 'yld-message yld-message-dark';
    }
    if (position === 'bottomRight') {
      messageContainer.style.left = 'auto';
      messageContainer.style.top = 'auto';
      messageContainer.style.bottom = 50 + length * 60 + 'px';
      messageContainer.style.right = '20px';
    } else {
      messageContainer.style.top = 50 + length * 60 + 'px';
      messageContainer.style.top = 50 + length * 60 + 'px';
    }
    $('body').appendChild(messageContainer);
    setTimeout(() => {
      messageContainer.remove();
    }, duration * 1000);
    ReactDOM.render(renderMessage(type, content), messageContainer);
  };
  const close = (node) => {
    node.target.parentNode.parentNode.parentNode.remove();
  };
  const renderMessage = (type, content) => {
    return (
      <div className="yld-message-content">
        <div className="yld-message-content-icon">
          <Icon type={typeMapping[type]} color={colorMapping[type]} />
        </div>
        <div className="yld-message-content-message">{content}</div>
        <div className="yld-message-content-close">
          <Icon
            type="guanbi"
            onClick={(e) => {
              close(e);
            }}
          />
        </div>
      </div>
    );
  };
  return {
    success: (content) => {
      open(1, content);
    },
    error: (content) => {
      open(2, content);
    },
    warning: (content) => {
      open(3, content);
    },
    normal: (content) => {
      open(4, content);
    },
  };
};
