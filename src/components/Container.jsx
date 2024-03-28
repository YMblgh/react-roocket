export default ({ children , className }) => {
    return (
        <div className={`container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    )
}