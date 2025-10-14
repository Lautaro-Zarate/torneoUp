interface ButtonProps{
    label: string;
    type?: 'button' | 'submit' | 'reset' | undefined
    className: string
}
export const Button = ({label, type, className} : ButtonProps) => {
    return(
        <div>
            <button type={type} className={className}>{label}</button>
        </div>
    )
}