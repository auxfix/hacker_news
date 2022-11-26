import styles from './button.module.scss';

interface ButtonProps {
    onClick: () => void,
    children: React.ReactNode,
}

export default function Button(props: ButtonProps) {
    const { onClick, children } = props;
    return (
        <button 
            type="button"
            className={styles.container} 
            onClick={onClick}>
            {children}
        </button>);
}