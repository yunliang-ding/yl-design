import { ReactNode } from 'react';

export interface UploadProps {
  text?: ReactNode;
}
export default ({ text }: UploadProps) => {
  return <div className="yld-upload">{text}</div>;
};
