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
export default class Message {
  duration: any;
  dark: any;
  position: string;
  constructor(props) {
    this.duration = props.duration || 3;
    this.position = props.position || 'center';
  }
  open = (type, content) => {
    let messageContainer = document.createElement('div');
    let length = $$('.yld-message').length;
    messageContainer.className = 'yld-message';
    if (this.position === 'br') {
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
    }, this.duration * 1000);
    ReactDOM.render(this.renderMessage(type, content), messageContainer);
  };
  close = (node) => {
    node.target.parentNode.parentNode.parentNode.remove();
  };
  success = (content) => {
    this.open(1, content);
  };
  error = (content) => {
    this.open(2, content);
  };
  warning = (content) => {
    this.open(3, content);
  };
  normal = (content) => {
    this.open(4, content);
  };
  renderMessage = (type, content) => {
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
              this.close(e);
            }}
          />
        </div>
      </div>
    );
  };
}
