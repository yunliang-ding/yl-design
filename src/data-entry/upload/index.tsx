import { ReactNode } from 'react';

interface UploadProps {
  text?: ReactNode;
}
export default ({ text }: UploadProps) => {
  return <div className="yld-upload">{text}</div>;
};
