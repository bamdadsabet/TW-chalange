export interface IButtonProps {
  type?: 'primary' | 'outlined'
  icon?: string
  children?: React.ReactNode
  action?: () => void
}