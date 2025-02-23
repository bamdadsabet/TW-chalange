import { IButtonProps, ButtonTypeEnum } from "./types"
import './Button.css'
function Button({type = ButtonTypeEnum.PRIMARY, icon, children, action}: IButtonProps) {
  return (
    <button 
      onClick={action} 
      className={`button ${type === ButtonTypeEnum.PRIMARY ? 'button--primary' : 'button--outlined'}`}
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