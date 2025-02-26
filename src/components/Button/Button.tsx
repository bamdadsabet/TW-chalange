import { IButtonProps } from "./types"
import './Button.css'
function Button({type = 'primary', icon, children, action, className = ''}: IButtonProps) {
  return (
    <button 
      onClick={action} 
      className={`button ${type === 'primary' ? 'button--primary' : 'button--outlined'} ${!children ? 'button--icon' : ''} ${className}`}
    >
      {children}
      {
        !!icon && (
          <img className="button__icon" src={icon} alt="icon" />
        )
      }
    </button>
  )
}

export default Button