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
  title?: string;
  duration?: number;
  content?: string;
}

export default ({ title = '提示', duration = 3 }: MessageProps) => {
  const open = (type, content) => {
    let messageContainer = document.createElement('div');
    let length = $$('.yld-notification').length;
    messageContainer.className = 'yld-notification';
    messageContainer.style.top = 50 + length * 140 + 'px';
    messageContainer.style.top = 50 + length * 140 + 'px';
    $('body').appendChild(messageContainer);
    setTimeout(() => {
      messageContainer.remove();
    }, duration * 1000);
    ReactDOM.render(renderMessage(type, content), messageContainer);
  };
  const close = (node) => {
    node.target.parentNode.parentNode.parentNode.parentNode.remove();
  };
  const renderMessage = (type, content) => {
    return (
      <div className="yld-notification-content">
        <div className="yld-notification-content-header">
          <div className="yld-notification-content-header-icon">
            <Icon type={typeMapping[type]} color={colorMapping[type]} />
            <span>{title}</span>
          </div>
          <div className="yld-notification-content-header-close">
            <Icon
              type="guanbi"
              onClick={(e) => {
                close(e);
              }}
            />
          </div>
        </div>
        <div className="yld-notification-content-info">{content}</div>
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
