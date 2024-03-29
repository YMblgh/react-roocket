export default ({ name , className }) => {
    return (
        <span className={`text-white font-bold text-3xl ${className}`}>{ name }</span>
    )
}