import { IButtonProps } from "./types"
import './Button.css'
function Button({type = 'primary', icon, children, action}: IButtonProps) {
  return (
    <button 
      onClick={action} 
      className={`button ${type === 'primary' ? 'button--primary' : 'button--outlined'}`}
    >
      {children}
      {
        !!icon && (
          <img src={icon} alt="icon" />
        )
      }
    </button>
  )
}

export default Button