export interface IButtonProps {
  type?: ButtonTypeEnum
  icon?: string
  children?: React.ReactNode
  action?: () => void
}

export const enum ButtonTypeEnum {
  PRIMARY = 'PRIMARY',
  OUTLINED = 'OUTLINED'
}