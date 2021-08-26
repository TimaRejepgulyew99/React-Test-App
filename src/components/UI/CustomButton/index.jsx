import moduleClass from './index.module.css'
export default function CustomButton ({ children, ...props }) {
  return (
    <button {...props} className={moduleClass['custom-btn']}>
      {children}
    </button>
  )
}
