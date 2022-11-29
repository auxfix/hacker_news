import styles from './button.module.scss';
import useButtonStyle from './hooks/useButtonStyle';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, onClick } = props;
  const [buttonStyle, onButtonDown, onButtonUp] = useButtonStyle([
    styles.button,
    styles.buttononpush,
  ]);

  return (
    <button
      className={buttonStyle}
      onClick={onClick}
      onMouseDown={onButtonDown}
      onMouseUp={onButtonUp}
      type="button"
      data-testid="button"
    >
      {children}
    </button>
  );
}
