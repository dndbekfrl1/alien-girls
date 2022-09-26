interface Props {
  open?: boolean;
  title?: string;
  TitleBar?: React.ReactElement;
  style?: React.CSSProperties;
  children?: React.ReactElement;
  onClose?: any;
}

function Window({ open, title, TitleBar, children, style, onClose }: Props) {
  if (!open) return <></>;

  return (
    <div style={style} className='window'>
      <div className='title-bar'>
        <div className='title-bar-text'>{title}</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize' />
          <button aria-label='Maximize' />
          <button aria-label='Close' onClick={onClose} />
        </div>
      </div>
      <div className='window-body'>{children}</div>
    </div>
  );
}

export default Window;

Window.defaultProps = {
  title: '',
  style: { width: 300 },
};
