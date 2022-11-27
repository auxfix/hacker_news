import useButtonStyle from './hooks/useButtonStyle';
import styles from './button.module.scss';

interface ButtonProps {
    onClick: () => void,
    children: React.ReactNode,
}

export default function Button(props: ButtonProps) {
    const { onClick, children } = props;
    const [
        buttonStyle, 
        onButtonDown, 
        onButtonUp
    ] = useButtonStyle([styles.button, styles.button_on_push]);

    return (
        <button 
            type="button"
            className={buttonStyle}
            onMouseDown={onButtonDown}
            onMouseUp={onButtonUp}
            onClick={onClick}>
            {children}
        </button>);
}