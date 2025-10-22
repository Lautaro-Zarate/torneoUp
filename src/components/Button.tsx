interface ButtonProps{
    label: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    className?: string
}
export const Button = ({label, type, className, onClick} : ButtonProps) => {
    return(
        <div>
            <button type={type} className={className} onClick={onClick}>{label}</button>
        </div>
    )
}