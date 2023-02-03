import ClassName from 'classnames';

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    className,
    ...rest
}) => {
    const classes = ClassName("flex flex-col items-center py-1.5 w-28", className, {
        "bg-blue-400 hover:bg-blue-600 active:bg-blue-800 text-white" : primary,
        "bg-zinc-500 hover:bg-zinc-500 active:bg-zinc-800 text-white" : secondary,
        "bg-green-400  hover:bg-green-500 active:bg-green-700 text-white" : success,
        "bg-yellow-400  hover:bg-yellow-500 active:bg-yellow-700 text-white" : success,
        "bg-red-400  hover:bg-red-500 active:bg-red-700 text-white" : danger,
        'bg-white': outline,
        "rounded-xl": rounded,
        "bg-white text-blue-600 border border-blue-500": primary && outline,
        "text-zinc-600 border border-zinc-500": secondary && outline,
        "text-green-600": success && outline,
        "text-yellow-600": warning && outline,
        "text-red-600": danger && outline,
    })
    return (
        <button {...rest} className={classes} >
            {children}
        </button>
    )
} 

Button.protoTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = (
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) + 
            Number(!!warning) +
            Number(!!danger)
        )

        if(count > 1){
            return new Error(
                "Only one primary, secondary, success, warning, danger can be used."
            )
        }
    }
}

export default Button;