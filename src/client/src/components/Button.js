import ClassName from 'classnames';

import './Button.css';

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

    const classes = ClassName('btn', className, {
        'primary' : primary,
        'secondary' : secondary,
        'rounded' : rounded,
        'success' : success,
        'warning' : warning,
        'danger' : danger,
        'outline': outline,
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