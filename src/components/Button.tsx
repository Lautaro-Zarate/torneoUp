interface ButtonProps{
    label: string;
    type: 'button' | 'submit' | 'reset' | undefined
}
export const Button = ({label, type} : ButtonProps) => {
    return(
        <div>
            <button type={type}>{label}</button>
        </div>
    )
}