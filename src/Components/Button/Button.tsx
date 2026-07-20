import "./Button.scss"

type ButtonProps = {
    label: string
    onClick: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
    return <button className="button" onClick={onClick}>{label}</button>
}