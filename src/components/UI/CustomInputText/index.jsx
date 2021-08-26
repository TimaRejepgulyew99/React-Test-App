import classModule from './index.module.css'
export default function CustomInputText ({ value, valueChanged }) {
  return (
    <div className='custom-input'>
      <input
        className={classModule['custom-input__field']}
        value={value}
        onChange={e => valueChanged(e.target.value)}
      />
    </div>
  )
}
