import styled from 'styled-components';
import Draggable from 'react-draggable';

interface Props {
  open?: boolean;
  title?: string;
  TitleBar?: React.ReactElement;
  style?: React.CSSProperties;
  defaultX?: number;
  defaultY?: number;
  children?: React.ReactElement;
  onClose?: any;
}

const Layout = styled.div``;

function Window({
  open,
  title,
  TitleBar,
  children,
  style,
  defaultX,
  defaultY,
  onClose,
}: Props) {
  if (!open) return <></>;

  return (
    <Draggable defaultPosition={{ x: defaultX || 0, y: defaultY || 0 }}>
      <Layout style={style} className='window'>
        <div className='title-bar'>
          <div className='title-bar-text'>{title}</div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize' />
            <button aria-label='Maximize' />
            <button aria-label='Close' onClick={onClose} />
          </div>
        </div>
        <div className='window-body'>{children}</div>
      </Layout>
    </Draggable>
  );
}

export default Window;

Window.defaultProps = {
  title: '',
  style: { width: 300 },
};
